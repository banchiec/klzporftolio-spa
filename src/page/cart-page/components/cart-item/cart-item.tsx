import Image from "../../../../common/component/image/image";
import { useContext, useState } from "react";
import { CartItemType } from "../../../../context/types";
import PriceByQuantity from "./components/price-by-quantity/price-by-quantity";
import "./cart-item.scss";
import { CartContext } from "../../../../context/cartContext";

const CartItem = (props: CartItemType) => {
  const { image, productType, productName, price, quantity, id } = props;

  const context = useContext(CartContext)!;

  const { addToCart, cartItems, removeFromCart, decreaseCartItemQuantity } =
    context;

  const itemToCart = {
    image: image,
    productName: productName,
    productType: productType,
    price: price,
    quantity: quantity,
    id: id,
  };

  const handleAddToCart = () => {
    addToCart(itemToCart);
  };

  const decreaseItemCart = () => {
    decreaseCartItemQuantity(itemToCart);
  };

  const removeItemFromCart = () => {
    removeFromCart(itemToCart);
  };

  return (
    <div className="cart-item_container">
      <div className="cart-item__details">
        <div className="cart-item__details__image">
          <Image srcImage={image} altImage={productType} />
        </div>
        <div className="cart-item__data">
          <div className="cart-item__data__description">
            <div>
              <p className="cart-item__data__product-type">{productType}</p>
              <p className="cart-item__data__product-name">{productName}</p>
            </div>
            <p className="cart-item__data__price">{price}€</p>
          </div>
          <PriceByQuantity
            addToCart={handleAddToCart}
            quantity={quantity}
            decreaseItem={decreaseItemCart}
            removeItemFromCart={removeItemFromCart}
            price={price}
          />
        </div>
      </div>
    </div>
  );
};
export default CartItem;
