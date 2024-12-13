import FormCommission from "../../../../page/commission-order-page/components/form-commission"
import { COMMISSIONS_ORDER } from "../../constants"
import { CommissionsOrderTypes } from "./types"
import Image from "../../../../common/component/image/image"
import "./commissions-order.scss"

const CommissionsOrder = (props: CommissionsOrderTypes) => {
	const { image, productTypeName, productTypeByName } = props

	return(
		<div className="klz-commissions-order">
			<div className="klz-commissions-order__container">
				<div className="klz-commissions-order__details">
					<div className="klz-commissions-order__details__image">
						<Image srcImage={image} altImage={productTypeName} />
					</div>
					<div className="klz-commissions-order__details__description">
						<p>{COMMISSIONS_ORDER.description}</p>
					</div>
				</div>
				<div>

				<div className="klz-commissions-order__form">
					<div className="klz-commissions-order__form__header">
						<h2>{productTypeName ?? ""}</h2>
						<p><span>from</span>50€</p>
					</div>
					<div className="klz-commissions-order__form__body">
						<p></p>
					</div>
					<FormCommission productType={productTypeByName}/>
				</div>
				</div>
			</div>
			{/* <ReviewCard title={"Prueb"} description={"Description"} image={imagePath}/> */}
		</div>
	)

}
export default CommissionsOrder