import { useState } from "react"
import { DeleteItem } from "../../../../../../assets/icons"
import { PriceByQuantityTypes } from "./types"
import "./price-by-quantity.scss"

const PriceByQuantity = (props: PriceByQuantityTypes ) => {
	const { price } = props
	const [ subTotal, setSubTotal ] = useState(price)
	const [ quantity, setQuantity ] = useState(0)

	const handleQuantityLess = () => {
		if(quantity > 0) setQuantity(quantity - 1)
		setSubTotal(subTotal*quantity)
	}

	const handleQuantityMore = () => {
		setQuantity(quantity + 1)
	}

	return (
		<div className="klz-price-by-quantity">
			<div className="klz-price-by-quantity__container">
				<span className="klz-price-by-quantity_less" onClick={() => handleQuantityLess()}>-</span>
    		<p className="klz-price-by-quantity__quantity">{quantity}</p>
				<span className="klz-price-by-quantity_more" onClick={() => handleQuantityMore()} >+</span>
				<DeleteItem/>
			</div> 
			<div className="klz-price-by-quantity__subtotal">
				<p>{subTotal}€</p>
			</div>
		</div>
	)
}

export default PriceByQuantity
