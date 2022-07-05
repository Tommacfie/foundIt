import bcrypt from "bcrypt";
import User from "../models/user.model";
import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { accessTokenString, accessTokenStringRefresh } from "../config";

let refreshTokens: string[] = [];

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const validatePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (validatePassword) {
        const accessToken = Jwt.sign(
          { userId: user._id },
          accessTokenString
          // { expiresIn: '5min' }
        );

        const refreshToken = Jwt.sign(
          { userId: user._id },
          accessTokenStringRefresh
        );

        refreshTokens.push(refreshToken);

        const { firstName, lastName, email, _id } = user;
        res.json({
          firstName,
          lastName,
          email,
          _id,
          accessToken,
          refreshToken,
        });
        res.status(200);
        next();
      } else {
        res.status(401);
        res.send({ message: "Invalid Password" });
      }
    } else {
      res.status(404);
      res.send({ message: "User doesn't exist" });
    }
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

interface ExtendedRequest extends Request {
  user: Jwt.JwtPayload;
}

export const authorise = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader: string = req?.headers?.authorization || "";

    if (authHeader !== "") {
      const token: string | undefined = authHeader.split(" ")[1];

      if (token === undefined)
        return res.status(401).send("Unauthorised access");

      Jwt.verify(token, accessTokenString, (error: any, user: any) => {
        if (error) return res.status(403).send("Invalid token");
        req.user = user;
        next();
      });
    } else {
      res.status(401).send("Unauthorised access");
    }
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

export const logout = async (req: Request, res: Response) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((t) => t !== token);
  res.send("Logged out");
};
