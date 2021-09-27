import { Switch, Route } from 'react-router-dom';
import AuthComponent from './auth.component';
import AppLayout from './app.component';
import NavBar from './nav.component';
import LoginScreen from '../../screens/login.screen';


const Layouts = (props) => {
  return (
    <Switch>
      <Route path='/auth'><AuthComponent isAuth={props.isAuth} /></Route>
      <Route path='/app'><AppLayout isAuth={props.isAuth} /></Route>
      <Route path='/'><LoginScreen /></Route>
    </Switch>
  )
}

export default Layouts;