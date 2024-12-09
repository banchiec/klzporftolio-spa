import { Controller, useForm } from "react-hook-form"
import { NumberFieldType } from "./types"

export const NumberField = (props: NumberFieldType) => {
	const {name, type, placeholder} = props
	const {register, control, } = useForm()

	return(
	<Controller
		name={name}
		control={control}
		render={({ field }) => (
			<input 
				{...field}
				placeholder={placeholder}
				type={type}
				{...register(name)}
				name={name}
			/>
		)}
	/>

	)
}