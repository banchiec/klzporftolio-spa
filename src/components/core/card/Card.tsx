import { currencyFormatter } from '../../../utils/currencyFormatter'
import './card.scss'
import { cardType } from "./types"

const Card = (props: cardType) => {
	const { image, title, description, price} = props
	const priceCurrency = currencyFormatter('EUR', price/100)
	return(
		<div className="shop-card">
			<div className="shop-card-image">
				<img  src={image} alt={title}/>
			</div>
			<div className="shop-card-data">
				<div className="shop-card-data-title">
					<h5 >{title}</h5>
				</div>
				<div className="shop-card-data-details">
					<p>{description}</p>
				</div>
				<div className="shop-card-data-price">
					<span>{priceCurrency} EUR</span>
				</div>
			</div>
		</div>
	)
}
export default Card
