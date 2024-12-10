import { CartListItem } from "./components/cart-list-item/cart-list-item"
import "./cart-page.scss"

const CartPage = () => {
  return (
    <div className='klz-cart-page'>
      <div className='klz-cart-page__container'>
        <h2 className="klz-cart-page__title">Cart</h2>
        <CartListItem />  
        <div className='klz-cart-page__subtotal'>
          <h3 className='klz-cart-page__subtotal-quantity'>Subtotal <span>50,00€</span></h3>
          <p className='klz-cart-page__subtotal-conditions'>Taxes will be calculated at checkout</p>
          <button className='klz-cart-page__subtotal-checkout-button'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage