import './action.screen.css';
import ButtonLarge from '../components/presentational/button-large.component';
import OptionComponent from '../components/presentational/option.component';
import { Redirect } from 'react-router-dom';
import CreateItem from './create.item.screen';

const ActionScreen = (props) => {
  const isAuthorised = props.auth;
  console.log(isAuthorised, 'action');
  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='login' />
          : <OptionComponent lost={'LOST'} found={'FOUND'} title={'Have you lost OR found an item?'} lostLink={'lost'} foundLink={'found'} />
      }
    </div>
  )
}

export default ActionScreen;

{/* <CreateItem lost={'LOST'} found={'FOUND'} title={'Have you lost OR found an item?'} */ }