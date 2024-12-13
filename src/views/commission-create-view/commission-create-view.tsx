import { useProductTypeList } from "../../hooks"
import { useLocation } from "react-router-dom"
import useSingleUpload from "../../hooks/upload"
import { useEffect, useState } from "react"
import { getNameForUrlProductType, getPathImageForProductTypeName, getProductTypeByName } from "./utils"
import { LoaderDots } from "../../components/loader-solar-system"
import CommissionsOrder from "./components/commissions-order/commissions-order"
import "./commissions-create-view.scss"

export const CommissionsCreateView = () => {
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
		<div className="klz-commissions-create-view">
			<CommissionsOrder 
				image={imagePath!} 
				productTypeName={productTypeName} 
				productTypeByName={productTypeByName}
			/>
		</div>
	)

}