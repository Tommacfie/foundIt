import React from "react";
import { useContext } from "react";
import ItemsList from "../components/containers/list-items.component";
import { Redirect } from "react-router-dom";
import './home.screen.component.css';
import { LoginContext } from "../helpers.js/context";

const HomeScreen = (props) => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const items = await Api.getItems();
  //     setItems(items);
  //   })();
  // }, []);

  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);

  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='/auth/login' />
          :
          <div className='home-screen'>
            <h3 className='home-header'>Home</h3>
            <ItemsList data={props.data} />
          </div>
      }
    </div>
  )
};

export default HomeScreen;