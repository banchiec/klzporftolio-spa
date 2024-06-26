import { CardShopCategoryType } from "./types"
import "./card-shop-category.scss"
import { Link } from "react-router-dom"
export const CardShopCategory = (props: CardShopCategoryType) => {
	const { title, description, path, image } = props
	return(
		<div className="klz-card-shop-category">
			<div className="klz-card-shop-category-box">
				<div className="klz-card-shop-category-container">
					<Link to={path!}>
						<div className="klz-card-shop-category-front">
							<img src={image} alt="image_category"/>
						</div>
						<div className="klz-card-shop-category-back">
							<div className="klz-card-shop-category__title">
								<h4>{title.toUpperCase()}</h4>
							</div>
							<div className="klz-card-shop-category__description">
								<p>{description}</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}