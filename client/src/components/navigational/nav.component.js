import React from "react";
import { Link } from "react-router-dom";
import CreateIcon from "../presentational/icon-create.component";
import HomeIcon from "../presentational/icon-home.component";
import ProfileIcon from "../presentational/icon-profile.component";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/app/home">
        <HomeIcon />
      </Link>
      <Link to="/app/create">
        <CreateIcon />
      </Link>
      <Link to="/app/profile">
        <ProfileIcon />
      </Link>
    </div>
  );
};

export default NavBar;
