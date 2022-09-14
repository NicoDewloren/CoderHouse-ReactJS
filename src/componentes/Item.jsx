import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <Link to={`/product/${info.id}`}>
          <img src={info.imagen} className="card-img-top" alt={info.titulo} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{info.titulo}</h5>
          <p className="card-text">${info.precio}</p>
          <Link to={`/product/${info.id}`}>
            <button className="btn btn-primary">Ver mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
