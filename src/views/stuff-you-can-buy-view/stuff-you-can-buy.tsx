import { useProductTypeList } from "../../hooks"
import { useLocation } from "react-router-dom"
import useSingleUpload from "../../hooks/upload"
import { useEffect, useState } from "react"
import { getNameForUrlProductType, getPathImageForProductTypeName, getProductTypeByName } from "../commission-create-view/utils"
import { LoaderDots } from "../../components/loader-solar-system"
import FormCommission from "../../page/commission-order-page/components/form-commission"
import "./stuff-you-can-buy.scss"

const StuffYouCanBuyView = () => {
	const location = useLocation()
	const [imagePath, setImagePath] = useState()
	const {data, isLoading } = useProductTypeList()
	const [productsType, setProductsType] = useState([])
	const [loader, setLoader] = useState<any>()
	const locationImage = location.pathname.split('/')[3]
	const productTypeName = getNameForUrlProductType(locationImage)
	const path = getPathImageForProductTypeName(productsType, productTypeName)
	const productTypeByName = getProductTypeByName(productsType, productTypeName)
	const {data: dataImage, isLoading: isLoadingImage } = useSingleUpload(path)

	useEffect(() => {
		if(isLoading){
			setLoader(<LoaderDots/>)
		}else{
			setProductsType(data)
		}
	},[isLoading, data, productTypeName])

	useEffect(() => {
		if(!isLoadingImage){
			setImagePath(dataImage)
		}
	}, [isLoadingImage, dataImage])

	return(
		<div>
		{ !isLoading ? (
		<div className="klz-commissions-order">
			<div className="klz-commissions-order__container">
				<div className="klz-commissions-order__details">
					<div className="klz-commissions-order__details__image">
						<img src={imagePath} alt="image_product"/>
					</div>
					<div className="klz-commissions-order__details__description">
						<p>I create unique, handmade retro-futuristic logos, typography, and <br/>
						artworks in a cartoon style. Based on your description, I bring your <br/>
						ideas to life. Feel free to ask questions or place an order if you think <br/>
						your concept aligns with my style!</p>
					
					</div>
				</div>
				<div>

				<div className="klz-commissions-order__form">
					<div className="klz-commissions-order__form__header">
						<h2>{productTypeName ?? ""}</h2>
						<p><span>from</span>50€</p>
					</div>
					<div className="klz-commissions-order__form__body">
						<p>I create unique, handmade retro-futuristic logos, typography, and artworks in a cartoon style. Based on your description, I bring your ideas to life. Feel free to ask questions or place an order if you think your concept aligns with my style!</p>
					</div>
					<FormCommission productType={productTypeByName}/>
				</div>
				</div>
			</div>
			{/* <ReviewCard title={"Prueb"} description={"Description"} image={imagePath}/> */}
		</div>
	): (<>{loader}</>)}
		</div>
	)
}
export default StuffYouCanBuyView