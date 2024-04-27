import { buttonType } from "./types"
import './button.scss'

const Button = (props: buttonType) => {
	const {svg, handleClick} = props
	return(
		<button className="button" onClick={() => handleClick}>
			<embed src={`${svg}`} />
		</button>
	)
	}
export default Button