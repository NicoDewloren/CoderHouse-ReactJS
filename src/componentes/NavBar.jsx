import React from "react";
import CartWidget from "./CartWidget";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const NavBar = () => {
  const { cart } = useCartContext();

  return (
    <div className="color-navbar container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-11">
            <nav className="navbar navbar-expand-lg container">
              <div className="container-fluid">
                <img src={logo} width="86" alt="Logo" />

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
                    <NavLink className="nav-link" to="/">
                      Inicio
                    </NavLink>
                    <NavLink className="nav-link" to="/category/pecheras">
                      Pecheras
                    </NavLink>
                    <NavLink className="nav-link" to="category/correas">
                      Correas
                    </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-1">
            {cart.length === 0 ? null : <CartWidget />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
