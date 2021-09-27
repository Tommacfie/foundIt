import { Route } from 'react-router-dom';
import RegisterScreen from '../../screens/register.screen';
import LoginScreen from '../../screens/login.screen';
import './auth.component.css';

const AuthComponent = (props) => {

  return (
    <div className='auth-component'>
      <Route path='/auth/login' exact> <LoginScreen /></Route>
      <Route path='/auth/register' exact><RegisterScreen /></Route>
    </div>
  )
}

export default AuthComponent;