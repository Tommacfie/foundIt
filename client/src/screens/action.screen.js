import './action.screen.css';
import ButtonLarge from '../components/presentational/button-large.component';
import OptionComponent from '../components/presentational/option.component';
import { Redirect } from 'react-router-dom';

const ActionScreen = (props) => {
  const isAuthorised = props.auth;
  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='login' />
          : <OptionComponent lost={'LOST'} found={'FOUND'} title={'Have you lost OR found an item?'} />
      }
    </div>
  )
}

export default ActionScreen;