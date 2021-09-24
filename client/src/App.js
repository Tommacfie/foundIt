import { useState, useEffect } from 'react';
import './App.css';
import Api from './services/api.service';
// import MainScreen from './screens/main.screen';
// import LoginScreen from './screens/login.screen';
import RegisterScreen from './screens/register.screen';


export default function App () {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    (async () => {
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (
    <div className='app-container'>
      {/* <MainScreen /> */}
      {/* <LoginScreen /> */}
      <RegisterScreen />
    </div>
  );
};