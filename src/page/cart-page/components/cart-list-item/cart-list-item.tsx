import { useState } from "react";
import { ProductType } from "../../../../types";
import { For } from "../../../../common/control";
import CartItem from "../cart-item/cart-item";

const products = [{
    image: "cart-item.jpeg", // Mock item image URL
    name: "MARS 23",
    price: 20.0, // Price per unit
    quantity: 1, // Quantity of the item
    total: 20.0, // Total price (price * quantity)
  },
  {
    image: "cart-item.jpeg", // Mock item image URL
    name: "MARS 240",
    price: 30.0, // Price per unit
    quantity: 1, // Quantity of the item
    total: 30.0, // Total price (price * quantity)
  },
];
export const CartListItem = () => {
  const renderProduct = (product: ProductType) => {
    return(
      <CartItem
        productName={product.name}
        srcImage={product.image}
        priceProduct={product.price}
      />
    )
  }
  return (
    <div className="cart-item">   
      <For each={products} render={renderProduct}/>
    </div>
  )
}
