import { useContext } from "react";
import "./cart-page.scss";
import { CartListItem } from "./components/cart-list-item/cart-list-item";
import { CartContext } from "../../context/cartContext";

const CartPage = () => {
  const context = useContext(CartContext)!;

  const { cartItems, getCartSubtotal } = context;

  const total: any = getCartSubtotal(cartItems);

  return (
    <div className="klz-cart-page">
      <div className="klz-cart-page_container">
        <h2>Cart</h2>
        <CartListItem />
        <div className="klz-cart-page_subtotal-container">
          <h3 className="klz-cart-page_subtotal">
            Subtotal <span>{total}€</span>
          </h3>
          <p className="klz-cart-page_conditions">
            Shipping and taxes will be calculated at checkout
          </p>
          <button className="klz-cart-page_checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
