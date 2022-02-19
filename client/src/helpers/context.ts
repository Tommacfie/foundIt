import { createContext } from "react";
import { Item } from "../interfaces/Types";

export const UserContext = createContext<{}>({});
export const ItemContext = createContext<Item>({} as Item);
export const LoginContext = createContext<{isAuthorised:boolean}>({isAuthorised:false});
export const ItemsContext = createContext<[]>([]);
