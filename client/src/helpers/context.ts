import { createContext } from "react";
import { Item, UserLogin } from "../interfaces/Types";

export const UserContext = createContext<UserLogin | {}>({});
export const ItemContext = createContext<Item>({} as Item);
export const LoginContext = createContext<{isAuthorised:boolean}>({isAuthorised:false});
export const ItemsContext = createContext<Item[]>([]);
