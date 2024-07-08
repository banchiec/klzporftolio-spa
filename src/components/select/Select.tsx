import { SelectType } from "./types"
import "./select.scss"

export const Select = (props: SelectType) => {

	const { name, options, onChange, onSelect, onBlur, ref, label, multiselect } = props
	return(
		<div className="klz-select">
			<select 
				name={name} 
				ref={ref} 
				onSelect={onSelect}
				onChange={onChange}
				onBlur={onBlur} 
				multiple={multiselect}
			>
				{options?.map((option:any) => (
					<option key={option.value} value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	)
}