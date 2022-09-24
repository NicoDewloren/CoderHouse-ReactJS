import React from "react";
import { useContext } from "react";
import { useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    return setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  const removeItem = (id) => {
    return setCart(cart.filter((product) => product.id !== id));
  };

  const addItem = (item, quantity) => {
    let newCart;
    let product = cart.find((product) => product.id === item.id);

    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      product = { ...item, quantity: quantity };
      newCart = [...cart, product];
    }
    setCart(newCart);
    console.log(newCart);
  };

  const totalPrice = () => {
    return cart.reduce(
      (acumulador, producto) =>
        acumulador + producto.quantity * producto.precio,
      0
    );
  };

  const totalProducts = () => {
    return cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeItem,
        addItem,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
