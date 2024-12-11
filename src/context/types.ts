export interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartContextValue {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearCart: (item: any) => void;
  decreaseCartItemQuantity: (item: any) => void;
  getCartSubtotal: (item: any) => void;
}
