import { Button } from "../core/button"
import { groupButtonsMarckType } from "./types"
import './group-buttons-mark.scss'

const GroupButtonsMark = (props: groupButtonsMarckType) => {
	const { buttonsMark} = props
	return(
		<div className="group-buttons-mark">
			{ buttonsMark.map((item, index) => {
				return(
					<div key={item.name}>
      			<Button  svg={item.svg} handleClick={item.click}/>
					</div>
				)
			})
			}
		</div>
	)
}
export default GroupButtonsMark