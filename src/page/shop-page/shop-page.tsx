import CardShopCategory from "./components/card-shop-category"
import StuffCantBuy from "../../assets/images/stuff-you-cant-buy.png"
import  Commisions from "../../assets/images/commissions.png"
import "./shop-page.scss"

const categoryItems = [
	{
		title: "Stuff you can buy",
		description: "I'm selling illustrations, stickers, and shirts here – everything that I love, and hopefully, you will too!",
		path: "/shop/stuff-you-can-buy",
		image: StuffCantBuy
	},
	{
		title: "Commisions",
		description: "I'm selling illustrations, stickers, and shirts here – everything that I love, and hopefully, you will too!",
		path: "/shop/commissions",
		image: Commisions 
	}
] 

export const ShopPage = () => {
	return(
		<div className="klz-shop-page">
			<div className="klz-shop-page-container">
				{categoryItems.map((category, index) =>(
					<CardShopCategory  
						key={index}
						title={category.title} 
						path={category.path} 
						description={category.description}
						image={category.image}
					/>
				))}
			</div>
		</div>
	)
}