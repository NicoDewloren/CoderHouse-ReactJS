import React from "react";
import Carrito from "./CartWidget";

import logo from "./images/logo.png";

const NavBar = () => {
  return (
    <div className="color-navbar container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-11">
            <nav className="navbar navbar-expand-lg container">
              <div className="container-fluid">
                <a className="navbar-brand">
                  <img src={logo} width="86" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <a className="nav-link" aria-current="page">
                      Inicio
                    </a>
                    <a className="nav-link">Productos</a>
                    <a className="nav-link">Nosotros</a>
                    <a className="nav-link">Contacto</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-1">
            <Carrito />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
