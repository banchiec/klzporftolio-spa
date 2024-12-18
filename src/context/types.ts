export interface CartItemType {
  id: string | undefined;
  price: number;
  productType: string;
  productName: string;
  description?: string;
  colors?: any[];
  quantity: number;
  image: string;
  deliveryDays?: {
    days: number;
    price: number;
  };
}

export interface CartContextValue {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearCart: (item: any) => void;
  decreaseCartItemQuantity: (item: any) => void;
  getCartSubtotal: (item: any) => void;
}
