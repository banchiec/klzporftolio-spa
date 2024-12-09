import arrow_down from "../../assets/images/arrow-down.png"
import React, { useState } from "react"
import "./select-color.scss"

const SelectColor = (props: any) => {
	const { setColors, colors, label, options } = props
	const [ visibleOptions, setVisibleOptions ] = useState(false)

	const handleVisibleOptions = () => {
		setVisibleOptions(!visibleOptions)
	}

	const selectedItemsColors = (e:any) => {
		setVisibleOptions(true)
		let colorsArray: any = []
		const isElement = colors.find((item: any) => item.label === e.label)
		if(isElement === undefined && colors?.length < 5) {
			colorsArray.push(...colors, { label: e.label, price: e.price, value: e.value})
			setColors(colorsArray)
		}
	}

	const deleteSelectionColors = (color: any) => {
		const colorsSelected = colors.filter((item: any) => item.label !== color.label)
		setColors(colorsSelected)
	}

	return(
		<div 
			className="klz-select-color"
		>
			<span>{label}</span>
			<div className="klz-select-color__selector">
				<div className="klz-select-color__color-selected">
					<ul className="klz-select-color__color-selected__list">
					{colors.map((color:any, index:number) =>(
						<li
							className="klz-select-color__color-selected__item"
							onClick={() => deleteSelectionColors(color)}
							key={index}
							style={{backgroundColor: `${color.label}`}} 
						></li>
					))}
					</ul>
				</div>
				<div 
					className="custom-select-image"
					onClick={() => handleVisibleOptions()} 
					>
					<img src={arrow_down} alt="image_arrow_down" />
				</div>
			</div>
			{visibleOptions && (
				<div className="klz-select-color__container">
					<ul>
						{options?.map((color: any, index: number) => {
							return(
								<li 
									className="klz-select-color__item" 
									key={index} 
									style={{backgroundColor: `${color.label}`}} 
									onClick={() => selectedItemsColors(color)}
								>
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	)
}
export default React.memo(SelectColor)