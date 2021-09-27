import { useState, useEffect } from 'react';
import './App.css';
import Api from './services/api.service';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './screens/home.screen.component';
import LoginScreen from './screens/login.screen';
import RegisterScreen from './screens/register.screen';
import CreateItem from './screens/create.item.screen';
import ActionScreen from './screens/action.screen';
import ImageForm from './components/form/image.form';
import ProfileView from './screens/profile.screen';
import ItemDetailsDisplay from './components/containers/item-details-display.component';
import Header from './components/presentational/header.component';
import NavBar from './components/navigational/nav.component';
import Layouts from './components/navigational/layouts.component';

// export const myContext = React.createContext('hello');

const App = () => {
  const [isAuthorised, setIsAuthorised] = useState(true);


  return (
    <Router>
      <Layouts isAuth={isAuthorised} />
    </Router>
  );
};

export default App;

{/* <div className='app-container'>
        <Header />
        <Route path='/create'><ActionScreen auth={isAuthorised} /></Route>
        <Route path="/lost"><CreateItem auth={isAuthorised} /></Route>
        <Route path="/found"><CreateItem auth={isAuthorised} /></Route>
        <Route path='/item'><ItemDetailsDisplay auth={isAuthorised} /> </Route>
        <Route path="/profile"><ProfileView data={items} auth={isAuthorised} /></Route>
        {isAuthorised &&
          <NavBar />
        }
      </div> */}