import { For } from "../../../../common/control";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../../../context/cartContext";
import { CartItemType } from "../../../../context/types";

export const CartListItem = () => {
  const context = useContext(CartContext)!;

  const { cartItems } = context;

  const renderProduct = (product: CartItemType) => {
    return (
      <CartItem
        id={product.id}
        image={product.image}
        name={product?.name}
        price={product.price}
        quantity={product.quantity}
      />
    );
  };
  return (
    <div className="cart-item">
      <For each={cartItems} render={renderProduct} />
    </div>
  );
};
