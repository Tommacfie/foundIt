import { useState, useEffect } from 'react';
import './App.css';
import Api from './services/api.service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home.screen.component';
import LoginScreen from './screens/login.screen';
import RegisterScreen from './screens/register.screen';
import CreateItem from './screens/create.item.screen';
import ProfileView from './screens/profile.screen';
import Header from './components/presentational/header.component';
import NavBar from './components/navigational/nav.component';

const App = () => {
  const [isAuthorised, setIsAuthorised] = useState(true);
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
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path="/home" element={<HomeScreen data={items} auth={isAuthorised} />} />
          <Route path="/create" element={<CreateItem />} />
          <Route path="/profile" element={<ProfileView data={items} auth={isAuthorised} />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
};

export default App;