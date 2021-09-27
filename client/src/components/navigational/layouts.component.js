import { Switch, Route, Redirect } from 'react-router-dom';
import AuthComponent from './auth.component';
import AppLayout from './app.component';
import LoginScreen from '../../screens/login.screen';
import { LoginContext, UserContext } from '../../helpers.js/context';
import { useState } from 'react';



const Layouts = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [userLogin, setUserLogin] = useState({}); //User login information
  console.log(isAuthorised, 'layouts');
  return (
    <LoginContext.Provider value={{ isAuthorised, setIsAuthorised }}>
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        <Switch>
          <Route path='/auth'><AuthComponent /></Route>
          <Route path='/app'><AppLayout /></Route>
          <Redirect from path='/' to='/auth/login'><LoginScreen /></Redirect>
        </Switch>
      </UserContext.Provider>
    </LoginContext.Provider>
  )
}

export default Layouts;