import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">{props.texto}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ItemCount stock="5" initial={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
