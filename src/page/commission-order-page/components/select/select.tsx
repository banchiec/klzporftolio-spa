import "./select.scss"

export const Select = () => {
	return(
		<div className="klz-select-container">
			<span>Delivery Date</span>
			<select className="klz-select-container__custom" name="select">
				<option value="value1">Value 1</option>
				<option value="value2" selected>Value 2</option>
				<option value="value3">Value 3</option>
			</select>
		</div>
	)
}
