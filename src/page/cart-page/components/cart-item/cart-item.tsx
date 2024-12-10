import Image from "../../../../common/component/image/image"
import { CartItemTypes } from "./types"
import PriceByQuantity from "./components/price-by-quantity/price-by-quantity"
import "./cart-item.scss"

const CartItem = (props: CartItemTypes) => {
	const { productName, srcImage, priceProduct } = props
	return(
		<div className="cart-item_container">
				<div className="cart-item__details">
					<div className="cart-item__details__image">
						<Image srcImage={srcImage} altImage={productName} />
					</div>
					<div className="cart-item__data">
						<div className="cart-item__data__description" >
							<p className="cart-item__data__name">{productName}</p>
							<p className="cart-item__data__price">{priceProduct}€</p>
						</div>
						<PriceByQuantity price={priceProduct}/>
					</div>
				</div>
    </div>
	)
}
export default CartItem