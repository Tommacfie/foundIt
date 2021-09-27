import { Switch, Route } from 'react-router-dom';
import AuthComponent from './auth.component';
import AppLayout from './app.component';
import LoginScreen from '../../screens/login.screen';
import { LoginContext } from '../../helpers.js/context';
import { useState } from 'react';

const Layouts = (props) => {

  const [isAuthorised, setIsAuthorised] = useState(false);

  return (
    <LoginContext.Provider value={{ isAuthorised, setIsAuthorised }}>
      <Switch>
        <Route path='/auth'><AuthComponent /></Route>
        <Route path='/app'><AppLayout /></Route>
        <Route path='/'><LoginScreen /></Route>
      </Switch>
    </LoginContext.Provider>
  )
}

export default Layouts;