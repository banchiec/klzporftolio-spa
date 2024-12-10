import { createContext, useState, useEffect } from "react";  
import { CartContextValue, CartItemType } from "./types";

export const CartContext = createContext<CartContextValue | undefined>(undefined); 

export const CartProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
 
    const [cartItems, setCartItems] = useState<CartItemType[]>([]); 

     const addToCart = (item: CartItemType) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); 

        if(isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) => 
                cartItem.id === item.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
                ) 
            ) 
        }
        else {
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    }      
 
    const removeFromCart = (item : CartItemType) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);   
        
        if(isItemInCart?.quantity === 1 ) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
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

    const clearCart = () => {
        setCartItems([]); 
    }
  
    const getCartTotal = (item: CartItemType) => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    } 

    useEffect(() => {
       const cartItems = localStorage.getItem("cartItems");   
       if(cartItems) {
        setCartItems(JSON.parse(cartItems));
       } 
    }, []);
 
    return (
        <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
    
    
}



