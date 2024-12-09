import { DeleteItem } from "../../../../../../assets/icons"

const PriceByQuantity = (props: any) => {
	const {price} = props
	return(
		<div className="cart-item_group-bottom">
			<div>
				<span className="cart-item_less">
				-
				</span>
    		<span className="cart-item_quantity">{1}</span>
				<span className="cart-item_more">
				+
				</span>
					<DeleteItem/>
			</div> 
				<p className="cart-item_total">{232}€</p>
		</div>
	)
}
export default PriceByQuantity