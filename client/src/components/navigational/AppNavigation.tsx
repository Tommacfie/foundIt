import { Route, Redirect } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import HomeScreen from "../../pages/HomePage";
import {getItems} from "../../services/ApiService";
import ProfileView from "../../pages/ProfilePage";
import CreateItem from "../../pages/CreateItemPage";
import ItemDetailsDisplay from "../containers/ItemDetailsDisplay";
import ImageForm from "../form/ImageForm";
import NavBar from "./Navbar";
import {
  LoginContext,
  ItemContext,
  ItemsContext,
  UserContext,
} from "../../helpers/Context";
import OptionComponent from "../presentational/Option";

const AppLayout = () => {
  const { isAuthorised } = useContext(LoginContext);
  const { currentUser } = useContext(UserContext);
  const [items, setItems] = useState([]); // items from db
  const [itemData, setItemData] = useState({}); //currently submitting items

  const fetchItems = async () => {
    const items = await getItems(currentUser.accessToken);
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {!isAuthorised && <Redirect to="/auth/login" />}
      <ItemsContext.Provider value={{ items, setItems }}>
        <Route path="/app/home" exact>
          <HomeScreen data={items} />
        </Route>
        <Route path="/app/profile" exact>
          <ProfileView data={items} />
        </Route>

        <ItemContext.Provider value={{ itemData, setItemData }}>
          <Route path="/app/create" exact>
            <OptionComponent
              title={"Have you lost OR found an item?"}
              topButtonText={"LOST"}
              bottomButtonText={"FOUND"}
              topButtonLink={"/app/create/lost"}
              bottomButtonLink={"/app/create/found"}
            />
          </Route>
          <Route path="/app/create/lost" exact>
            <CreateItem />
          </Route>
          <Route path="/app/create/found" exact>
            <CreateItem />
          </Route>
          <Route path="/app/create/lost/image" exact>
            {" "}
            <ImageForm />
          </Route>
          <Route path="/app/create/found/image" exact>
            {" "}
            <ImageForm />
          </Route>
          <Route path="/app/create/lost/detail" exact>
            <ItemDetailsDisplay />{" "}
          </Route>
          <Route path="/app/create/found/detail" exact>
            <ItemDetailsDisplay />{" "}
          </Route>
          <Route path="/app/postSubmit" exact>
            <OptionComponent
              title={"Thankyou for your submission"}
              topButtonText={"Return to Home"}
              bottomButtonText={"Submit another item"}
              topButtonLink={"/app/home"}
              bottomButtonLink={"/app/create"}
            />
          </Route>
        </ItemContext.Provider>
      </ItemsContext.Provider>
      <Redirect from="/app" to="/app/home" exact />
      <NavBar />
    </>
  );
};

export default AppLayout;
