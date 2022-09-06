import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const items = [
  {
    id: 1,
    imagen: "./images/pecheraAtigrada.jpeg",
    titulo: "Pechera Atigrada",
    precio: 1200,
  },
  {
    id: 2,
    imagen: "./images/pecheraBatman.jpeg",
    titulo: "Pechera Batman",
    precio: 1200,
  },
  {
    id: 3,
    imagen: "./images/pecheraConRosas.jpeg",
    titulo: "Pechera con Rosas",
    precio: 1200,
  },
  {
    id: 4,
    imagen: "./images/pecheraCorazones.jpeg",
    titulo: "Pechera de Corazones",
    precio: 1200,
  },
  {
    id: 5,
    imagen: "./images/pecheraMilitar.jpeg",
    titulo: "Pechera Militar",
    precio: 1200,
  },
  {
    id: 6,
    imagen: "./images/pecheraSuperman.jpeg",
    titulo: "Pechera Superman",
    precio: 1200,
  },
];

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });

    obtenerProductos.then((resp) => setProductos(resp));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ItemList productos={productos} />
      </div>

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
