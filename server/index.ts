import Express from "express";
import cors from "cors";
import router from "./router";
import { PORT } from "./config";

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(router);

app
  .listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.log(error);
  });
