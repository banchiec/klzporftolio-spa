import { useState } from "react"
import { CustomSelectType } from "./types"
import arrow_down from "../../assets/images/arrow-down.png"
import "./custom-select.scss"

export const CustomSelect:any = (props: CustomSelectType) => {
	const { label, options, setOption, customSelectRef, value} = props
	const [ visibleOptions, setVisibleOptions ] = useState(false)

	const handleVisibleOptions = () => {
		setVisibleOptions(!visibleOptions)
	}

	const handleSelectedOption = (option: any) => {
		setOption(option);
	}

	return(
		<div 
			ref={customSelectRef} 
			className="custom-select" 
			onClick={() => handleVisibleOptions()} 
		>
			<span>{label}</span>
			<div className="custom-select__select" >
				<div className="custom-select__select-container">
					<p>{value?.label}</p>
				</div>
				<div className="custom-select-image">
					{value.price !== 0 && (<p>+{value.price}€</p>)}
					<img src={arrow_down} alt="image_arrow_down" />
				</div>
			</div>
			{visibleOptions && (
				<div className="custom-select-options__container">
					<ul>
						{options?.map((option) => (
							<li 
								key={option.value} 
								onClick={() => handleSelectedOption(option) }
							>
								<p className="custom-select-option-label">{option.label}</p>
								{option.price !== 0 && ( <p>+{option.price}€</p> )}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
