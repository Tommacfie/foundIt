import { Route, Redirect } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import Api from "../../services/api.service";
import HomeScreen from "../../screens/home.screen.component";
import ActionScreen from "../../screens/action.screen";
import ProfileView from "../../screens/profile.screen";
import CreateItem from "../../screens/create.item.screen";
import ItemDetailsDisplay from '../containers/item-details-display.component';
import ImageForm from "../form/image.form";
import Header from "../presentational/header.component";
import NavBar from "./nav.component";
import { LoginContext, ItemContext, UserContext, ItemsContext } from "../../helpers.js/context";


const AppLayout = () => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const [items, setItems] = useState([]); // items from db
  const [itemData, setItemData] = useState({}); //currently submitting items
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // useEffect(() => {
  //   (async () => {
  //     const items = await Api.getItems(currentUser.accessToken);
  //     setItems(items);
  //   })();
  // }, []);
  return (
    <div className='app-container'>
      {!isAuthorised && <Redirect to='/auth/login' />}
      <Header />
      <ItemsContext.Provider value={{ items, setItems }}>
        <Route path='/app/home' exact><HomeScreen data={items} /></Route>
        <Route path="/app/profile" exact><ProfileView data={items} /></Route>

        <ItemContext.Provider value={{ itemData, setItemData }}>

          <Route path='/app/create' exact><ActionScreen title={'Have you lost OR found an item?'} topButtonText={'LOST'} bottomButtonText={'FOUND'} topButtonLink={'/app/create/lost'} bottomButtonLink={'/app/create/found'} /></Route>
          <Route path="/app/create/lost" exact><CreateItem /></Route>
          <Route path="/app/create/found" exact><CreateItem /></Route>
          <Route path='/app/create/lost/image' exact> <ImageForm /></Route>
          <Route path='/app/create/found/image' exact> <ImageForm /></Route>
          <Route path='/app/create/lost/detail' exact><ItemDetailsDisplay /> </Route>
          <Route path='/app/create/found/detail' exact><ItemDetailsDisplay /> </Route>
          <Route path='/app/postSubmit' exact>
            <ActionScreen title={'Thankyou for your submission'}
              topButtonText={'Return to Home'}
              bottomButtonText={'Submit another item'}
              topButtonLink={'/app/home'}
              bottomButtonLink={'/app/create'} />
          </Route>

        </ItemContext.Provider>
      </ItemsContext.Provider>
      <Redirect from='/app' to='/app/home' exact />
      <NavBar />
    </div >
  )
}

export default AppLayout;