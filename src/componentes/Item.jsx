import React from "react";

const Item = ({ info }) => {
  const { titulo, precio, imagen } = info;
  const src = require(`${imagen}`);

  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <img src={src} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">${precio}</p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
