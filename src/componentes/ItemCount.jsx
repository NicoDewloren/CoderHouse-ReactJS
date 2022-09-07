import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);

  function aumentar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function disminuir() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    if (count <= stock) {
      setStock(stock - count);
    }
  }

  return (
    <div className="card ">
      <div className="card-body">
        <h5 className="text-center">Contador</h5>
        <div className="flexcenter ">
          <button onClick={disminuir}>-</button>
          <p> {count} </p>
          <button onClick={aumentar}>+</button>
        </div>
        <p className="text-center">
          <button className="btn btn-primary mt-2" onClick={onAdd}>
            Agregar al carrito
          </button>
        </p>
        <p className="text-center">
          El stock <b>disponible</b> es: {stock} unidades
        </p>
      </div>
    </div>
  );
};

export default ItemCount;
