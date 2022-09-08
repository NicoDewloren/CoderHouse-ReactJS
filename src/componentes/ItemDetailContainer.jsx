import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const item = {
  id: 1,
  imagen: "./images/pecheraAtigrada.jpeg",
  titulo: "Pechera Atigrada",
  precio: 1200,
};

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, 3000);
    });

    getData.then((item) => setProducto(item));
  }, []);

  return <ItemDetail item={producto} />;
};

export default ItemDetailContainer;
