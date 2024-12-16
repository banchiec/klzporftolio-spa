import { CartListItem } from "./components/cart-list-item/cart-list-item";
import "./cart-page.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartPage = () => {
  const context = useContext(CartContext)!;

  const { getCartSubtotal, cartItems } = context;

  const total: any = getCartSubtotal(cartItems);

  return (
    <div className="klz-cart-page">
      <div className="klz-cart-page__container">
        <h2 className="klz-cart-page__title">Cart</h2>
        <CartListItem />
        <div className="klz-cart-page__subtotal">
          <h3 className="klz-cart-page__subtotal-quantity">
            Subtotal <span>{total}€</span>
          </h3>
          <p className="klz-cart-page__subtotal-conditions">
            Taxes will be calculated at checkout
          </p>
          <button className="klz-cart-page__subtotal-checkout-button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
