import { useState, useEffect } from 'react';
import './App.css';
import Api from './services/api.service';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  return (
    <Router>
      {/* {!isAuthorised ? (
        <LoginScreen />
      )
        : ( */}
      <div className='app-container'>
        <Header />
        <Switch>
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          {isAuthorised &&
            <Route path="/home" exact component={HomeScreen} />
          }
          <Route path="/create" exact component={CreateItem} />
          <Route path="/profile" exact component={ProfileView} />


        </Switch>
        <NavBar />
      </div>
      )
    </Router>
  );
};

export default App;