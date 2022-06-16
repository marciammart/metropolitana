import React from "react";
import logoDark from "../assets/logo-dark.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logoDark} alt="metropolitana" />
      <div className='navbar-menu'>
        <div className='navbar-link'>Sobre</div>
        <div className='navbar-link'>Contactar</div>
      </div>
    </div>
  );
};

export default NavBar;
