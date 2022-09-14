import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      const item = productos.find((prod) => prod.id === id);
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });

    getData.then((item) => setProducto(item));
  }, []);

  return <ItemDetail item={producto} />;
};

export default ItemDetailContainer;
