import React from "react";
import { NavLink } from "react-router-dom";
import cart from "./images/cart4.svg";

const CartWidget = () => {
  return (
    <NavLink to="/cart">
      <p className="text-center mt-4">
        <img src={cart} alt="" width="38" />
      </p>
    </NavLink>
  );
};

export default CartWidget;
