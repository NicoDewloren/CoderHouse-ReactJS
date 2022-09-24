import React from "react";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ producto }) => {
  const { removeItem } = useCartContext();

  const subtotal = producto.precio * producto.quantity;
  return (
    <div className="row">
      <div className="col-md-3">
        <img
          src={producto.imagen}
          alt={producto.title}
          className="img-carrito"
        />
      </div>
      <div className="col-md-3">
        <p>
          <b>{producto.titulo}</b> <b>({producto.quantity})</b>{" "}
        </p>
      </div>

      <div className="col-md-3">
        <p>
          <b>Precio: ${subtotal}</b>
        </p>
      </div>
      <div className="col-md-3">
        <button
          onClick={() => removeItem(producto.id)}
          className="btn btn-danger"
        >
          Eliminar del carrito
        </button>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default CartItem;
