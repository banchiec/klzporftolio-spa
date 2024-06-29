import { SelectType } from "./types"
import "./select.scss"

export const Select = (props: SelectType) => {
	const { name, options, onChange, onSelect, onBlur, ref, label, multiselect, className} = props
	return(
		<div className="klz-select">
			<select 
				name={name} 
				ref={ref} 
				onSelect={onSelect} 
				onChange={onChange} 
				onBlur={onBlur} 
				multiple={multiselect}
				className="klz-select__custom"
			>
				<span>{label}</span>
				{options?.map((option:any) => (
					<option key={option.value} value={option.value}>{option.value}</option>
				))}
			</select>
		</div>
	)
}