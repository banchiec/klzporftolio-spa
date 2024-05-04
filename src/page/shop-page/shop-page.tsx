import CardShopCategory from "./components/card-shop-category"
import "./shop-page.scss"

export const ShopPage = () => {
	return(
		<div className="klz-shop-page">
			<div className="klz-shop-page-container">
				<CardShopCategory/>
				<CardShopCategory/>
			</div>
		</div>
	)
}