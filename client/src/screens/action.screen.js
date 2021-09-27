import './action.screen.css';
import OptionComponent from '../components/presentational/option.component';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../helpers.js/context';


const ActionScreen = (props) => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='login' />
          : <OptionComponent lost={'LOST'} found={'FOUND'} title={'Have you lost OR found an item?'} lostLink={'/app/lost'} foundLink={'/app/found'} />
      }
    </div>
  )
}

export default ActionScreen;
