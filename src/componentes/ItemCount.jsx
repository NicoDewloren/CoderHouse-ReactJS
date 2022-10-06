import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);

  function aumentar() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function disminuir() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="card item-count">
      <div className="card-body">
        <div className="flexcenter">
          <button className="item-count__inputs" onClick={disminuir}>
            <b>-</b>
          </button>
          <p> {count} </p>
          <button className="item-count__inputs" onClick={aumentar}>
            <b>+</b>
          </button>
        </div>
        <p className="text-center">
          <button
            className="btn btn-primary mt-2"
            onClick={() => props.onAdd(count)}
          >
            Agregar al carrito
          </button>
        </p>
        <p className="text-center item-count__text">
          El stock <b>disponible</b> es: {props.stock} unidades
        </p>
      </div>
    </div>
  );
};

export default ItemCount;
