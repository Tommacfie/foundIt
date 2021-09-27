import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import Api from "../../services/api.service";
import HomeScreen from "../../screens/home.screen.component";
import ActionScreen from "../../screens/action.screen";
import ProfileView from "../../screens/profile.screen";
import CreateItem from "../../screens/create.item.screen";
import ItemDetailsDisplay from '../containers/item-details-display.component';
import Header from "../presentational/header.component";
import NavBar from "./nav.component";
import { LoginContext, ItemContext } from "../../helpers.js/context";


const AppLayout = () => {

  const [items, setItems] = useState([]);
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    (async () => {
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (
    <div className='app-container'>
      <Header />
      <Route path='/app/home' exact><HomeScreen data={items} /></Route>
      <Route path="/app/profile" exact><ProfileView data={items} /></Route>
      <ItemContext.Provider value={{ itemData, setItemData }}>
        <Route path='/app/create' exact><ActionScreen /></Route>
        <Route path="/app/create/lost" exact><CreateItem /></Route>
        <Route path="/app/create/found" exact><CreateItem /></Route>
        <Route path='/app/create/lost/detail' ><ItemDetailsDisplay /> </Route>
        <Route path='/app/create/found/detail' ><ItemDetailsDisplay /> </Route>
      </ItemContext.Provider>
      <Redirect from='/app' to='/app/home' exact />
      <NavBar />
    </div>
  )
}

export default AppLayout;