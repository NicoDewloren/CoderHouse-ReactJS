import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);

  function onAdd() {
    setGoToCart(true);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={item.imagen} alt={item.titulo} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="text-center">{item.titulo}</h2>
          <p className="text-center">${item.precio}</p>
          {goToCart ? (
            <Link to="/cart"> Finalizar compra</Link>
          ) : (
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
