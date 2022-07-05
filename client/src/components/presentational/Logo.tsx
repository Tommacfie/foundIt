import LogoIcon from "../../assets/magnifying-glass.svg";

const Logo = () => {
  return (
    <div className="logo">
      <h1 className="logo__text">foundIt</h1>
      <img className="logo__icon" src={LogoIcon} alt="magnifying-glass-icon" />
    </div>
  );
};

export default Logo;
