import { createContext } from "react";
export const UserContext = createContext({});
export const ItemContext = createContext({ lostOrFound: true });
export const LoginContext = createContext(false);
export const ItemsContext = createContext([]);