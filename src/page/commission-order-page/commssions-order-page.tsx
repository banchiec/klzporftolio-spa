import "./commissions-order-page.scss"
import lettering from "../../assets/images/lettering.png"
import Select from "./components/select"

export const CommissionsOrderPage = () => {
	return(
		<div className="klz-commissions-order">
			<div className="klz-commissions-order__container">
				<div className="klz-commissions-order__details">
					<div className="klz-commissions-order__details__image">
						<img src={lettering} alt="image_product"/>
					</div>
					<div className="klz-commissions-order__details__description">
						<p>I create unique, handmade retro-futuristic logos, typography, and artworks in a cartoon style. Based on your description, I bring your ideas to life. Feel free to ask questions or place an order if you think your concept aligns with my style!</p>
					</div>
				</div>
				<div className="klz-commissions-order__form-header">
					<div className="klz-commissions-order__form-header__header">
						<h2>LOGO/LETTERING</h2>
						<p>50€</p>
					</div>
					<div className="klz-commissions-order__form-header__body">
						<p>I create unique, handmade retro-futuristic logos, typography, and artworks in a cartoon style. Based on your description, I bring your ideas to life. Feel free to ask questions or place an order if you think your concept aligns with my style!</p>
					</div>
				</div>
				<div className="klz-commissions-order__form-body">
					<Select/>
					<Select/>
					<Select/>
					<Select/>
				</div>
			</div>
		</div>
	)
}