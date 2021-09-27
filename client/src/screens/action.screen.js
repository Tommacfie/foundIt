import './action.screen.css';
import OptionComponent from '../components/presentational/option.component';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext, ItemContext } from '../helpers.js/context';


const ActionScreen = (props) => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const { itemData, setItemData } = useContext(ItemContext);

  return (
    <div>
      {!isAuthorised
        ? <Redirect to='/auth/login' />
        :
        <OptionComponent lost={'LOST'} found={'FOUND'} title={'Have you lost OR found an item?'} lostLink={'/app/create/lost'} foundLink={'/app/create/found'} />
      }
    </div>
  )
}

export default ActionScreen;
