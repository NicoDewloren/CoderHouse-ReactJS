import React from "react";

const ItemDetail = ({ item }) => {
  const { titulo, precio, imagen } = item;
  const src = require(`${imagen}`);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={src} alt={titulo} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="text-center">{titulo}</h2>
          <p className="text-center">${precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
