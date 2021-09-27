import { Route } from 'react-router-dom';
import RegisterScreen from '../../screens/register.screen';
import LoginScreen from '../../screens/login.screen';
import './auth.component.css';

const AuthComponent = (props) => {

  return (
    <div className='auth-component'>
      <Route path='/auth/login' exact> <LoginScreen auth={props.isAuth} /></Route>
      <Route path='/auth/register' exact><RegisterScreen auth={props.isAuth} /></Route>
    </div>
  )
}

export default AuthComponent;