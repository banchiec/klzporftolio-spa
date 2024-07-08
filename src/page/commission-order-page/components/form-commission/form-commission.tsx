import { useRef, useState } from "react"
import { FormCommissionType } from "./types"
import { FormProvider, useForm } from "react-hook-form"
import { COMMISSIONS_DEFAULT_VALUES, COMMISSIONS_INPUTS_DEFAULT_NAMES, DEFAULT_COMMISSIONS_SELECT_VALUE, FORM_COMMISSIONS_SELECTED_VALUES } from "./constant"
import { CustomSelect } from "../../../../components/custom-select"
import help from "../../../../assets/images/help.png"
import "../../commissions-order-page.scss"


const onSubmit = (e:any) => {
	e.preventDefault()
	console.log("submit")
}

export const FormCommission = (props: FormCommissionType) => {
	const [deliveryDays, setDeliveryDays] = useState(DEFAULT_COMMISSIONS_SELECT_VALUE)
	const [deliveryFormat, setDeliveryFormat] = useState(DEFAULT_COMMISSIONS_SELECT_VALUE)
	const [revisions, setRevisions] = useState(DEFAULT_COMMISSIONS_SELECT_VALUE)
	const [description, setDescription] = useState("")

	const deliveryDaysRef = useRef()
	const deliveryFormatRef = useRef()
	const revisionsRef= useRef()
	const onChangeDescription = (e:any) => {
		setDescription(e.target.value)
	}

	const formCommissions = useForm({ defaultValues: { ...COMMISSIONS_DEFAULT_VALUES }})
	const { 
		// register, 
		// control, 
		handleSubmit, 
		// watch 
	} = formCommissions

	return(
		<div className="klz-commissions-order__form-body">
			<FormProvider {...formCommissions}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CustomSelect 
						name={COMMISSIONS_INPUTS_DEFAULT_NAMES.deliveryDays}
						label="Delivery Days"
						value={deliveryDays}
						options={FORM_COMMISSIONS_SELECTED_VALUES.deliveryDays}
						setOption={setDeliveryDays}
						customSelectRef={deliveryDaysRef}
					/>
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
					
					{/* <Select 
						name={FORM_FIELD_COMMISSION.colors}
						label={FORM_COMMISSIONS.colors}
						options={selectOptionsDelivery}
					/> */}
					{/* <div className="klz-commissions-order__form-body-textarea">
						<span>{FORM_COMMISSIONS}</span>
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
					</button> */}
				</form>
			</FormProvider>
		</div>
	)
}