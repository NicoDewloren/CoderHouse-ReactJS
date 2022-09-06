import React from "react";
import Item from "./Item";

const ItemList = ({ productos = [] }) => {
  return productos.map((x) => <Item key={x.id} info={x} />);
};

export default ItemList;
