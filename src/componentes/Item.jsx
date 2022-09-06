import React from "react";

const Item = ({ info }) => {
  const imagen = require(info.imagen);
  console.log(info.imagen);
  console.log(imagen);
  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <img src={info.imagen} className="card-img-top" alt={info.titulo} />
        <div className="card-body">
          <h5 className="card-title">{info.titulo}</h5>
          <p className="card-text">${info.precio}</p>
          <input className="btn btn-primary" value="Agregar al carrito" />
        </div>
      </div>
    </div>
  );
};

export default Item;
