import Select from "../select"
import cart from "../../../../assets/images/cart_icon.png"
import { FORM_COMMISSIONS, FORM_FIELD_COMMISSION } from "../../constants"
import { FormCommissionType } from "./types"
import "../../commissions-order-page.scss"

const selectOptionsDelivery = [
	{
		"name": "1",
		"value": "10 days",
	},
	{
		"name": "2",
		"value": "20 days",
	}
]
const handleSubmit = (e:any) => {
	e.preventDefault()
	console.log("submit")
}

export const FormCommission = (props: FormCommissionType) => {
	return(
	<div className="klz-commissions-order__form-body">
		<form onSubmit={(e) => handleSubmit(e)}>
			<Select 
				name={FORM_FIELD_COMMISSION.deliveryDays}
				label={FORM_COMMISSIONS.deliveryDays}
				options={selectOptionsDelivery}
			/>
			<Select 
				name={FORM_FIELD_COMMISSION.colors}
				label={FORM_COMMISSIONS.colors}
				options={selectOptionsDelivery}
			/>
			<div className="klz-commissions-order__form-body-textarea">
				<span>{FORM_COMMISSIONS.textDescription}</span>
				<textarea 
					name={FORM_FIELD_COMMISSION.description}
					className="klz-commissions-order__form-body__textarea"
				/>
			</div>
			<Select 
				name={FORM_FIELD_COMMISSION.revisions}
				label={FORM_COMMISSIONS.revisions}
				options={selectOptionsDelivery}
			/>
			<Select 
				name={FORM_FIELD_COMMISSION.deliveryFormat}
				label={FORM_COMMISSIONS.deliveryFormat}
				options={selectOptionsDelivery}
			/>
			<button className="klz-commissions-order__form-body__button">
				<span className="klz-commissions-order__form-body__button-add-to-cart">
					{FORM_COMMISSIONS.addToCart}
				</span>
				<div className="klz-commissions-order__form-body__button-description">
					<span className="klz-commissions-order__form-body__button-description__subtotal">
						{FORM_COMMISSIONS.subtotal}
					</span>
					<span className="klz-commissions-order__form-body__button-description__price">
						70€
					</span>
					<img 
						className="klz-commissions-order__form-body__button-description__cart"
						src={cart} 
						alt="icon_cart"
					/>
				</div>
			</button>
		</form>
	</div>
	)
}