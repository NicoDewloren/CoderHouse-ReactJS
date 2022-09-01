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
    <div className="card">
      <div className="card-body">
        <h5 className="text-center">Contador</h5>
        <div className="flexcenter">
          <button onClick={disminuir}>-</button>
          <input type="text" value={count} />
          <button onClick={aumentar}>+</button>
        </div>
        <input className="btn btn-primary mt-2" value="Agregar al Carrito" />
      </div>
    </div>
  );
};

export default ItemCount;
