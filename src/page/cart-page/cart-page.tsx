import { CartItem} from './components/cart-item'
import "./cart-page.scss"

export const CartPage = () => {
  return (
    <div className='klz-cart-page'>
        <div className='klz-cart-page_container'>
          <h2>Cart</h2>
          <CartItem />  
          <div className='klz-cart-page_subtotal-container'>
          <h3 className='klz-cart-page_subtotal'>Subtotal <span>50,00€</span></h3>
          <p className='klz-cart-page_conditions'>Shipping and taxes will be calculated at checkout</p>
          <button className='klz-cart-page_checkout-button'>Checkout</button>
          </div>
        </div>
    </div>
  )
}
