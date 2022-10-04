import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Form from "./Form";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Form />
        </div>
        <div className="col-md-6">
          {cart.map((producto) => (
            <CartItem key={producto.id} producto={producto} />
          ))}
          <p className="text-center">
            <b>Total a pagar : ${totalPrice()}</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
