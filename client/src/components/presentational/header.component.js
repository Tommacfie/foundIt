import React from "react";
import Logo from "./logo.component";
import "../../scss/components/header.component.scss";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
    </div>
  );
};

export default Header;
