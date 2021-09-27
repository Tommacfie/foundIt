import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import Api from "../../services/api.service";
import HomeScreen from "../../screens/home.screen.component";
import ActionScreen from "../../screens/action.screen";
import ProfileView from "../../screens/profile.screen";
import CreateItem from "../../screens/create.item.screen";
import Header from "../presentational/header.component";
import NavBar from "./nav.component";
import { LoginContext } from "../../helpers.js/context";


const AppLayout = () => {

  const [items, setItems] = useState([]);
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);

  useEffect(() => {
    (async () => {
      // const isAuth = await Api.login({ email: 'tom@macfie.com', password: 'ajax' });
      // setIsLoggedIn(isAuth);
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (

    <div className='app-container'>
      <Header />
      <Route path='/app/home' exact><HomeScreen data={items} /></Route>
      <Route path="/app/profile" exact><ProfileView data={items} /></Route>
      <Route path='/app/create' exact><ActionScreen /></Route>
      <Route path="/app/lost"><CreateItem /></Route>
      <Route path="/app/found"><CreateItem /></Route>
      {/* <Route path='/item'><ItemDetailsDisplay auth={isAuthorised} /> </Route> */}
      <Redirect from='/app' to='/app/home' exact />
      <NavBar />
    </div>
  )
}

export default AppLayout;