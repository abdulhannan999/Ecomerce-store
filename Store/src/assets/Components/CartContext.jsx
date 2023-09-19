import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.qty += 1;
      existingProduct.totalPrice += product.price;
      setCart([...cart]);
    } else {
      const newCartItem = {
        name: product.name,
        brand: product.brand,
        qty: 1,
        totalPrice: product.price,
        img: product.img,
      };
      setCart([...cart, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.name !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        calculateGrandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
