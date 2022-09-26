import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const querybd = getFirestore();
    const queryCollection = collection(querybd, "productos");

    if (categoria) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoria)
      );
      getDocs(queryFilter).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
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
