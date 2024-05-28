import lettering from "../../assets/images/lettering.png"
import FormCommission from "./components/form-commission"
// import ReviewCard from "./components/review-card"
// import image from "../../assets/images/about-me-klauz.jpeg"
import "./commissions-order-page.scss"


// const title = "The stories about my art"
// const description ="Klaus's artistic prowess turned my vision into a distinctive logo for The CWord Company. Despite the complexity of my ideas, he skillfully translated them onto paper, capturing the essence of my brand in a visually compelling manner. The resulting logo not only meets but exceeds expectations, drawing consistent praise for its handmade charm and clever design. Klaus's ability to infuse humor adds a unique and memorable element, making our brand stand out in the market. Collaborating with ... more"

export const CommissionsOrderPage = () => {
	return(
		<div className="klz-commissions-order">
			<div className="klz-commissions-order__container">
				<div className="klz-commissions-order__details">
					<div className="klz-commissions-order__details__image">
						<img src={lettering} alt="image_product"/>
					</div>
					<div className="klz-commissions-order__details__description">
						<p>I create unique, handmade retro-futuristic logos, typography, and <br/>artworks in a cartoon style. Based on your description, I bring your <br/>ideas to life. Feel free to ask questions or place an order if you think <br/>your concept aligns with my style!</p>
					</div>
				</div>
				<div>

				<div className="klz-commissions-order__form">
					<div className="klz-commissions-order__form__header">
						<h2>LOGO/LETTERING</h2>
						
						<p><span>from</span>50€</p>
					</div>
					<div className="klz-commissions-order__form__body">
						<p>I create unique, handmade retro-futuristic logos, typography, and artworks in a cartoon style. Based on your description, I bring your ideas to life. Feel free to ask questions or place an order if you think your concept aligns with my style!</p>
					</div>
					<FormCommission/>
				</div>
				</div>
			</div>
			{/* <ReviewCard title={title} description={description} image={image}/> */}
		</div>
	)

}