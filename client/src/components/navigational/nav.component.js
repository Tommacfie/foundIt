import React from "react";
import { Link } from "react-router-dom";
import CreateIcon from "../presentational/icon-create.component";
import HomeIcon from "../presentational/icon-home.component";
import ProfileIcon from "../presentational/icon-profile.component";
import "../../scss/nav.component.scss";

const NavBar = () => {
  return (
    <div className="navBar-container">
      <div className="button home-button-container">
        <Link to="/app/home">
          <HomeIcon />
        </Link>
      </div>
      <div className="button add-button-container">
        <Link to="/app/create">
          <CreateIcon />
        </Link>
      </div>
      <div className="button profile-button-container">
        <Link to="/app/profile">
          <ProfileIcon />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
