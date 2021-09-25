import ItemsList from "../components/containers/list-items.component";
import ButtonStd from "../components/presentational/button-std.component";
import './profile.screen.css';

const ProfileView = (props) => {
  const isAuthorised = props.auth;
  return (
    <div>
      {
        !isAuthorised
          ? <h1>Unauth</h1>
          : <ItemsList data={props.data} />
        // <ItemDetailsDisplay data={item} />
        // <ModalDelete />
      }
    </div>
  )
};

export default ProfileView;