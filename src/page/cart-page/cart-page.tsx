import { CartItem} from './components/cart-item'
import "./cart-page.scss"
import { Button } from '../../components/core/button'

export const CartPage = () => {
  return (
    <div className='klz-cart-page'>
        <div className='klz-cart-page_container'>
          <CartItem />  
          
          <h2>Subtotal 50,00€</h2>
          <p>Shipping and taxes will be calculated at checkout</p>
        </div>
    </div>
  )
}
