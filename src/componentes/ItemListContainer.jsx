import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { productos } from "./productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    if (categoria) {
      obtenerProductos.then((resp) =>
        setItems(resp.filter((producto) => producto.categoria === categoria))
      );
    } else {
      obtenerProductos.then((resp) => setItems(resp));
    }
  }, [categoria]);

  return (
    <div className="container">
      <div className="row">
        <ItemList productos={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
