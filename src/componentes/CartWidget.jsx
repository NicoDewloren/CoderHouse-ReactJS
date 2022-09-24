import React from "react";
import { NavLink } from "react-router-dom";
import cart from "./images/cart4.svg";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <NavLink to="/cart">
      <p className="text-center mt-4">
        <img src={cart} alt="" width="38" />
        <span class="badge rounded-pill text-bg-success">
          {totalProducts() || ""}
        </span>
      </p>
    </NavLink>
  );
};

export default CartWidget;
