import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { getFirestore } from "firebase/firestore";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const { totalPrice, cart } = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      buyer: { nombre, telefono, email, direccion },
      cart: cart,
      date: serverTimestamp(),
      total: totalPrice,
    };
    const db = getFirestore();
    const refOrden = collection(db, "orders");
    // addDoc(refOrden, orden);

    console.log(orden);
  };
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const handleDireccion = (e) => {
    setDireccion(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="col-md-9">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            onChange={handleNombre}
            value={nombre}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="telefono" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            onChange={handleTelefono}
            value={telefono}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="direccion" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            onChange={handleDireccion}
            value={direccion}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-success">Generar orden</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
