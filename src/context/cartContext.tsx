import { createContext, useState, useEffect } from "react";
import { CartContextValue, CartItemType } from "./types";

export const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item: CartItemType) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.productName === item.productName
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.productName === item.productName
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const decreaseCartItemQuantity = (item: CartItemType) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart?.quantity === 1) {
      setCartItems(
        cartItems.filter(
          (cartItem) => cartItem.productName !== item.productName
        )
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeFromCart = (item: CartItemType) => {
    return setCartItems(
      cartItems.filter((cartItem) => cartItem.productName !== item.productName)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartSubtotal = (item: CartItemType) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseCartItemQuantity,
        removeFromCart,
        clearCart,
        getCartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
