import { iconType } from "./types"
import './icon.scss'

const Icon = (props: iconType) => {
	const { svg, quantity, handleClick} = props
	return(
		<div 
			className={quantity? "icon-with-quantity": ""}
			onClick={handleClick}
		>
			<div className="icon-with-quantity__values">
			{quantity??
				<div>
						{quantity}
				</div>
			}
			</div>
			<div>
				{svg}
			</div>
		</div>
	)
}
export default Icon