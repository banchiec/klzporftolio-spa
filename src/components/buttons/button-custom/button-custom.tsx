import { ButtonCustomType } from "./type"
import "./button-custom.scss"

const ButtonCustom = (props: ButtonCustomType ) => {
	const {icon, onClick, label, color } = props

	return(
		<div className="klz-button-custom">
			<button onClick={onClick} style={ {background: `${color}`}}> 
				<img src={icon} alt="contact me"/>
				{label}
			</button>
		</div>
	)
}
export default ButtonCustom