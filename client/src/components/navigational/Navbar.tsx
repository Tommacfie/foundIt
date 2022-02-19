import React from "react";
import { Link } from "react-router-dom";
import CreateIcon from "../presentational/NavButtonCreate";
import HomeIcon from "../presentational/NavButtonHome";
import ProfileIcon from "../presentational/NavButtonProfile";

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
