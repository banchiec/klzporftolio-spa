import { Controller, useForm } from "react-hook-form"
import { TextFieldType } from "./types"

export const TextField = (props: TextFieldType) => {
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