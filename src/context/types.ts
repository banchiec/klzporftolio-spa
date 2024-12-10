export interface CartItemType {
    id: string | number;  
    name: string;
    price: number
    quantity: number; 
  } 
  
  
 export  interface CartContextValue {
    cartItems: CartItemType[]; 
    addToCart: (item : CartItemType ) => void; 
    removeFromCart: (item : CartItemType) => void;
    clearCart : (item : any) => void; 
    getCartTotal: (item : CartItemType) => void;
  }
  