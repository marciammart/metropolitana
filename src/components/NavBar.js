import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/logo-dark.png";
import { useOnClickOutside } from "use-hooks";

const NavBar = () => {
  const ref = useRef();
  const [burgerOpen, setBurgerOpen] = useState(false);

  useOnClickOutside(ref, () => setBurgerOpen(false));

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logoDark} />
        </Link>

        <a role="button" className={`navbar-burger ${burgerOpen ? "is-active" : ""}`}
          aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
          onClick={() => setBurgerOpen(!burgerOpen)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="navbar-item" to="/">
              Sobre
            </Link>
            <Link className="navbar-item" to="/">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
