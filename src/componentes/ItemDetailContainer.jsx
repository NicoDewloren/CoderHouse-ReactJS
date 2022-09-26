import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const querybd = getFirestore();
    const queryDoc = doc(querybd, "productos", detalleId);
    getDoc(queryDoc).then((res) => setProducto({ id: res.id, ...res.data() }));
  }, []);

  return <ItemDetail item={producto} />;
};

export default ItemDetailContainer;
