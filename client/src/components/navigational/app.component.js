import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from 'react';
import Api from "../../services/api.service";
import HomeScreen from "../../screens/home.screen.component";
import ActionScreen from "../../screens/action.screen";
import ProfileView from "../../screens/profile.screen";
import Header from "../presentational/header.component";
import NavBar from "./nav.component";


const AppLayout = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      // const isAuth = await Api.login({ email: 'tom@macfie.com', password: 'ajax' });
      // setIsAuthorised(isAuth);
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (
    <div className='app-container'>
      <Header />
      <Route path='/app/home' exact><HomeScreen data={items} auth={props.isAuth} /></Route>
      <Route path='/app/create' exact><ActionScreen auth={props.isAuth} /></Route>
      {/* <Route path="/lost"><CreateItem auth={isAuthorised} /></Route>
      <Route path="/found"><CreateItem auth={isAuthorised} /></Route> */}
      {/* <Route path='/item'><ItemDetailsDisplay auth={isAuthorised} /> </Route> */}
      <Route path="/app/profile" exact><ProfileView data={items} auth={props.isAuth} /></Route>
      <Redirect from='/app' to='/app/home' exact />
      <NavBar />
    </div>
  )
}

export default AppLayout;