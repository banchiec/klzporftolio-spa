import { SelectType } from "./types"

export const Select = (props: SelectType) => {
	const { name, options, onChange, onBlur, ref, multiselect} = props
	return(
		<select name={name} ref={ref} onChange={onChange} onBlur={onBlur} multiple={multiselect}>
			{options?.map((option:any) => (
				<option key={option.value} value={option.value}>{option.label}</option>
			))}
    </select>
	)
}