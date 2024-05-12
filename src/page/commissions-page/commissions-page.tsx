import "./commissions-page.scss"
import cartoon from "../../assets/images/cartoon.png"
import cover from "../../assets/images/cover.png"
import lettering from "../../assets/images/lettering.png"
import CardShopCategory from "../shop-page/components/card-shop-category"
import vectorArrow from "../../assets/images/vector-arrow.png"

const commissionsItems = [
	{
		id: 1,
		title: "logo/lettering",
		description: "I'm selling illustrations, stickers, and shirts here – everything that I love, and hopefully, you will too!",
		path: "/shop/commissions/logo",
		image: lettering 
	},
	{
		id: 2,
		title: "Cartoon illustration",
		description: "I'm selling illustrations, stickers, and shirts here – everything that I love, and hopefully, you will too!",
		path: "/shop/commissions/cartoon",
		image: cartoon 
	},
	{
		id: 3,
		title: "Cover",
		description: "I'm selling illustrations, stickers, and shirts here – everything that I love, and hopefully, you will too!",
		path: "/shop/commissions/cover",
		image: cover 
	}
]

export const CommissionsPage = () => {
	return (
		<div className="klz-commissions-page">
			<div className="klz-commissions-page-container">
				
				<div className="klz-commissions-page__header">
					<div className="klz-commissions-page__header__title">
						<h1>Commissions</h1>
					</div>
					<div className="klz-commissions-page__header__question">
						<p>Uncertain about <br/> what's right for you?</p>
						<img src={vectorArrow} alt="vector-arrow"/>
					</div>
				</div>
				<div className="klz-commissions-page__data">
					{ commissionsItems.map((commission) => (
						<CardShopCategory
							key={commission.id}
							title={commission.title}
							description={commission.description}
							path={commission.path}
							image={commission.image}
						/>
					))
					}
				</div>
			</div>
		</div>
	)
}