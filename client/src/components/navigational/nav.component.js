import React from "react";
import { Link } from "react-router-dom";
import CreateIcon from "../presentational/icon-create.component";
import HomeIcon from "../presentational/icon-home.component";
import ProfileIcon from "../presentational/icon-profile.component";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="button navbar__home-button">
        <Link to="/app/home">
          <HomeIcon />
        </Link>
      </div>
      <div className="button navbar__add-button">
        <Link to="/app/create">
          <CreateIcon />
        </Link>
      </div>
      <div className="button navbar__profile-button">
        <Link to="/app/profile">
          <ProfileIcon />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
