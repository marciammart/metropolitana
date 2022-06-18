import React, { useState, useRef } from "react";
import logoDark from "../assets/logo-dark.png";
import FeatherIcon from "feather-icons-react";
import { useOnClickOutside } from "use-hooks";

const NavBar = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <img className="navbar-logo" src={logoDark} alt="metropolitana" />
        <div ref={ref}>
          <div className="navbar-menu-mobile" onClick={() => setOpen(!open)}>
            <FeatherIcon icon="menu" size="25" />
          </div>
          <div className={`navbar-menu ${open && "navbar-menu-open"}`}>
            <div className="navbar-link">Sobre</div>
            <div className="navbar-link">Contactar</div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default NavBar;
