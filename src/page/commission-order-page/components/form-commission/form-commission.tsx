import React, { useEffect, useRef, useState } from "react"
import { FormCommissionType } from "./types"
import { 
	COMMISSIONS_DEFAULT_VALUES, 
	COMMISSIONS_INPUTS_DEFAULT_NAMES, 
	DEFAULT_COMMISSIONS_SELECT_VALUE, 
	FORM_COMMISSIONS_SELECTED_VALUES 
} from "./constant"
import { CustomSelect } from "../../../../components/custom-select"
import help from "../../../../assets/images/help.png"
import cart from "../../../../assets/images/cart_icon.png"
import { FORM_COMMISSIONS } from "../../constants"
import SelectColor from "../../../../components/select-color/select-color"
import { useCategoriesList, useProductsCreate } from "../../../../hooks"
import "../../commissions-order-page.scss"



const FormCommission = (props: FormCommissionType) => {
	const {productType} = props
	const [priceCommission, setPriceCommission] = useState(50)
  const { createProduct } = useProductsCreate();
	const { dataCategoriesList, isLoadingCategoriesList } = useCategoriesList()
	const [deliveryDays, setDeliveryDays] = useState(DEFAULT_COMMISSIONS_SELECT_VALUE)
	const [deliveryFormat, setDeliveryFormat] = useState(DEFAULT_COMMISSIONS_SELECT_VALUE)
	const [revisions, setRevisions] = useState(DEFAULT_COMMISSIONS_SELECT_VALUE)
	const [description, setDescription] = useState("")
	const [colors, setColors] = useState([])

	const deliveryDaysRef = useRef()
	const deliveryFormatRef = useRef()
	const revisionsRef= useRef()
	
	const onChangeDescription = (e:any) => {
		setDescription(e.target.value)
	}

	const onSubmit = (e:any) => {
		e.preventDefault()
		const currentColors = colors?.map((color:any) => color?.label)

		const newCommissions = {
			name: "First element commission",
			description: description,
			deliveryDays: {
				days: deliveryDays.value,
				price: deliveryDays.price 
			},
			colors: currentColors,
			price: priceCommission,
			reviews: {
				days: revisions.value,
				price: revisions.price
			}
		}
	}

	useEffect(() => {
		const price = 50 + deliveryDays.price + revisions.price + deliveryFormat.price
		setPriceCommission(price)
	}, [deliveryDays.price, revisions.price, deliveryFormat.price])

	return(
		<div className="klz-commissions-order__form-body">
				<form onSubmit={onSubmit}>
					<CustomSelect 
						name={COMMISSIONS_INPUTS_DEFAULT_NAMES.deliveryDays}
						label="Delivery Days"
						value={deliveryDays}
						options={FORM_COMMISSIONS_SELECTED_VALUES.deliveryDays}
						setOption={setDeliveryDays}
						customSelectRef={deliveryDaysRef}
					/>
					<SelectColor setColors={setColors} colors={colors} label={"Choose your color palette"} options = {FORM_COMMISSIONS_SELECTED_VALUES.colors}/>
					<div className="klz-commissions-order__form-body__textarea">
						<div className="klz-commissions-order__form-body__textarea__label">
							<span>Insert you text</span>
							<img src={help} alt="image_help"/>
						</div>
						<textarea 
							onChange={(e) => onChangeDescription(e)}
							rows={10}
							defaultValue={description}
						/>
					</div>
					<CustomSelect 
						name={COMMISSIONS_INPUTS_DEFAULT_NAMES.revisions}
						label="Revisions"
						value= {revisions}
						options={FORM_COMMISSIONS_SELECTED_VALUES.revisions}
						setOption={setRevisions}
						customSelectRef={revisionsRef}
					/>
					<CustomSelect 
						name={COMMISSIONS_INPUTS_DEFAULT_NAMES.deliveryFormat}
						label="Delivery Format"
						value={deliveryFormat}
						options={FORM_COMMISSIONS_SELECTED_VALUES.deliveryFormat}
						customSelectRef={deliveryFormatRef}
						setOption={setDeliveryFormat}
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
								{`${priceCommission}€`}
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
export default React.memo(FormCommission)