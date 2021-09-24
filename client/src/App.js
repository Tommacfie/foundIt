import { useState, useEffect } from 'react';
import './App.css';
import Api from './services/api.service';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/home.screen.component';
import LoginScreen from './screens/login.screen';
import RegisterScreen from './screens/register.screen';
import CreateItem from './screens/create.item.screen';
import ProfileView from './screens/profile.screen';
import Header from './components/presentational/header.component';
import NavBar from './components/navigational/nav.component';


const App = () => {

  const [isAuthorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    (async () => {
      const isAuth = await Api.login('pat@smela.com', 'neko');
      setIsAuthorised(isAuth)
    })();
  }, []);


  const userAuth = false;
  // if (!userAuth) {
  //   return (
  //     <LoginScreen />
  //   )
  // }

  return (
    <Router>
      {!userAuth &&
        <div>
          <Switch>
            <LoginScreen />
          </Switch>
        </div>}
      <div className='app-container'>
        <Switch>
          <Header />
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/create">
            <CreateItem />
          </Route>
          <Route path="/profile">
            <ProfileView />
          </Route>
          <Route path="/register">
            <RegisterScreen />
          </Route>
        </Switch>
        <NavBar />
      </div>
    </Router>
  );
};

export default App;