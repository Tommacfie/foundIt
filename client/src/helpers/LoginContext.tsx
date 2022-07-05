import { ReactElement, createContext } from 'react';

const LoginContext = createContext({
  isAuthorised: false
})

export default LoginContext;

export const LoginContextProvider = ({
  children,
  userID
} : {
    children: ReactElement;
userID: string;
  }) => {
  const data = useLogin(userID);

  return (
    <LoginContext.Provider data={data}>
      {children}
    </LoginContext.Provider>
  )
}