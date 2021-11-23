import React from "react";
import LogoIcon from "../../assets/magnifying-glass.svg";

const Logo = () => {
  return (
    <h1 className="logo">
      FoundIt
      <img className="logo__icon" src={LogoIcon} alt="magnifying-glass-icon" />
    </h1>
  );
};

export default Logo;
