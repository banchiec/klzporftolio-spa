import { SelectType } from "./types"

export const Select = (props: SelectType) => {
	const { name, options, onChange, onBlur, ref} = props
	return(
		<select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
			{options?.map((option:any) => (
				<option key={option.value} value={option.value}>{option.label}</option>
			))}
    </select>
	)
}