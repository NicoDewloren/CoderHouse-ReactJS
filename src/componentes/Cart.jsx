import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          No tenes ningun producto en el carrito!
        </div>
        <Link to="/">
          <button className="btn btn-primary">Ir a comprar </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {cart.map((producto) => (
        <CartItem key={producto.id} producto={producto} />
      ))}
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <p>
            <b>Total a pagar: ${totalPrice()}</b>
          </p>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger" onClick={clearCart}>
            Limpiar carrito
          </button>
        </div>
        <div className="col-md-2">
          <Link to="/checkout">
            <button className="btn btn-success">Finalizar compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
