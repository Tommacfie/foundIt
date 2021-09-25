import React from "react";
import ItemsList from "../components/containers/list-items.component";
import { Redirect } from "react-router-dom";
import './main.screen.css';

const HomeScreen = (props) => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const items = await Api.getItems();
  //     setItems(items);
  //   })();
  // }, []);

  //DELETEME
  // const item = {
  //   brandModel: "Gold",
  //   description: "Diamond encrusted. Engraving inside. My wife had the engraving done on my birthday. It was a very special day",
  //   image: "www.diamonds.com",
  //   location: "Waterloo beach, Liverpool",
  //   lostOrFound: true,
  //   submittedBy: "Divorced",
  //   title: "Wedding Ring",
  //   _id: "614f0bcb36dc72798845b6e3"
  // }
  const isAuthorised = props.auth;

  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='login' />
          : <ItemsList data={props.data} />

      }
    </div>
  )
};

export default HomeScreen;