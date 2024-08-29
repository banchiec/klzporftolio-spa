// import FormCommission from "./components/form-commission"
// import { useProductTypeList } from "../../hooks"
// import { useLocation } from "react-router-dom"
// import useSingleUpload from "../../hooks/upload"
// import { useEffect, useState } from "react"
// import "./commissions-order-page.scss"

export const CommissionsOrderPage = () => {
// 	const location = useLocation()
// 	const [imagePath, setImagePath] = useState()
// 	const {data} = useProductTypeList()

// 	let productTypePath= location.pathname.split('/')[3]
// 	let productTypeName =""
// 	if(productTypePath=== "cartoon-illustration"){
// 		productTypeName = "Cartoon Illustration"
// 	}
// 	if(productTypePath=== "logo-lettering"){
// 		productTypeName = "Logo/Lettering"
// 	}
// 	if(productTypePath === "cover"){
// 		productTypeName = "Cover"
// 	}
// 	const productType = data?.find((product: any) => product.name === productTypeName )

// 	const pathFile = `${productType?.image?.split('\\')[1]}`
// 	const pathImage = `${productType?.image?.split('\\')[2]}`

// 	const path = `${pathFile}\\${pathImage}` 
// 	console.log(productTypePath);

// 	const {data: dataImage, isLoading: isLoadingImage } = useSingleUpload(path)

// 	useEffect(() => {
// 		if(!isLoadingImage){
// 			setImagePath(dataImage)
// 		}
// 	}, [isLoadingImage,dataImage])

	return(
		<div className="klz-commissions-order">
 			<div className="klz-commissions-order__container">
 				<div className="klz-commissions-order__details">
 					<div className="klz-commissions-order__details__image">
{/* // 						<img src={imagePath} alt="image_product"/> */}
 					</div>
 					<div className="klz-commissions-order__details__description">
 						<p>I create unique, handmade retro-futuristic logos, typography, and <br/>artworks in a cartoon style. Based on your description, I bring your <br/>ideas to life. Feel free to ask questions or place an order if you think <br/>your concept aligns with my style!</p>
 					</div>
 				</div>
 				<div>
 				<div className="klz-commissions-order__form">
 					<div className="klz-commissions-order__form__header">
 						<h2>LOGO/LETTERING</h2>
 						<p><span>from</span>50€</p>
 					</div>
 					<div className="klz-commissions-order__form__body">
 						<p>I create unique, handmade retro-futuristic logos, typography, and artworks in a cartoon style. Based on your description, I bring your ideas to life. Feel free to ask questions or place an order if you think your concept aligns with my style!</p>
 					</div>
{/* // 					<FormCommission/> */}
 				</div>
 				</div>
 			</div>
 			{/* <ReviewCard title={title} description={description} image={image}/> */}
 		</div>
	)

}