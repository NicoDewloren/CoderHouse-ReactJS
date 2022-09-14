import React from "react";

import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={item.imagen} alt={item.titulo} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="text-center">{item.titulo}</h2>
          <p className="text-center">${item.precio}</p>
          <ItemCount stock={item.stock} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
