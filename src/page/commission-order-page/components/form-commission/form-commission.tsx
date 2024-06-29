import { FormCommissionType } from "./types"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { COMMISSIONS_DEFAULT_VALUES, FORM_COMMISSIONS_SELECTED_VALUES } from "./constant"
import Select from "../../../../components/select"
import "../../commissions-order-page.scss"


const onSubmit = (e:any) => {
	e.preventDefault()
	console.log("submit")
}

export const FormCommission = (props: FormCommissionType) => {

	const formCommissions = useForm({
		defaultValues: {
			...COMMISSIONS_DEFAULT_VALUES
		}
	})
	const { register, control, handleSubmit, watch } = formCommissions

	return(
	<div className="klz-commissions-order__form-body">
		<FormProvider {...formCommissions}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name={"deliveryDays"}
					control={control}
					render={({field}) => 
						<Select {...field}
							options={FORM_COMMISSIONS_SELECTED_VALUES.deliveryDays}
						/>
					}
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