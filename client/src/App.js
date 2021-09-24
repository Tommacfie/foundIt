import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/presentational/header.component';
import Api from './services/api.service';



export default function App () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};