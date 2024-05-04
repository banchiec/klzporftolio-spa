import klzAboutMe from "../../../../assets/images/about-me-klauz.jpeg"
import "./card-shop-category.scss"
export const CardShopCategory = () => {
	return(
		<div className="klz-card-shop-category">
			<div className="klz-card-shop-category-image">
				<img src={klzAboutMe} alt="image_category"/>
			</div>
			<div>
				<p></p>
			</div>
		</div>
	)
}