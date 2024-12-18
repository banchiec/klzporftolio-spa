export interface PriceByQuantityTypes {
  price: number;
  quantity: number;
  addToCart: () => void;
  decreaseItem: () => void;
  removeItemFromCart: () => void;
}
