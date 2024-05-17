import "./select.scss"
import { SelectTypes } from "./types"

export const Select = (props: SelectTypes) => {
	const { name, options, label } = props

	return(
		<div className="klz-select">
			<span>{label}</span>
			<select onChange={(e) =>console.log(e.target.value)} className="klz-select__custom" name={name}>
				<option value="" selected></option>
				<option value="value1">1</option>
				<option value="value2">Value 2</option>
				<option value="value3">Value 3</option>
			</select>
		</div>
	)
}
