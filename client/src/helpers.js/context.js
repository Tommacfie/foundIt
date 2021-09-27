import { createContext } from "react";

export const ItemContext = createContext({ lostOrFound: true });
export const LoginContext = createContext({ isAuthorised: false });