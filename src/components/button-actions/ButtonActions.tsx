import Icon from "../core/icon/Icon"
import { buttonActionsType } from "./types"

const ButtonActions = (props: buttonActionsType) => {
	const { className, buttons } = props
	return(
		<div className={className}>
			{
				buttons?.map((item, index) => {
					return (
						<div key={index}>
							<Icon svg={<item.icon/>} quantity={item.quantity} handleClick={item.handleClick}/>
						</div>
					)
				})
			}
		</div>
	)
}
export default ButtonActions