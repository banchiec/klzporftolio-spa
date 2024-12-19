import { useState } from "react";
import { DeleteItem } from "../../../../../../assets/icons";
import { PriceByQuantityTypes } from "./types";
import "./price-by-quantity.scss";

const PriceByQuantity = (props: PriceByQuantityTypes) => {
  const { price, addToCart, quantity, removeItemFromCart, decreaseItem } =
    props;

  const total = price * quantity;

  const [subTotal, setSubTotal] = useState(price);

  return (
    <div className="klz-price-by-quantity">
      <div className="klz-price-by-quantity__container">
        <span className="klz-price-by-quantity_less" onClick={decreaseItem}>
          -
        </span>
        <p className="klz-price-by-quantity__quantity">{quantity}</p>
        <span className="klz-price-by-quantity_more" onClick={addToCart}>
          +
        </span>
        <DeleteItem removeItemFromCart={removeItemFromCart} />
      </div>
      <div className="klz-price-by-quantity__subtotal">
        <p>{total}€</p>
      </div>
    </div>
  );
};

export default PriceByQuantity;
