import lettering from "../../assets/images/lettering.png"
import FormCommission from "./components/form-commission"
// import ReviewCard from "./components/review-card"
// import image from "../../assets/images/about-me-klauz.jpeg"
import "./commissions-order-page.scss"
import { useProductTypeList } from "../../hooks"
import { useLocation, useNavigate } from "react-router-dom"
import reducer from '../../state/reducers/repositoriesReducer';
import useSingleUpload from "../../hooks/upload"
import { useEffect, useState } from "react"


// const title = "The stories about my art"
// const description ="Klaus's artistic prowess turned my vision into a distinctive logo for The CWord Company. Despite the complexity of my ideas, he skillfully translated them onto paper, capturing the essence of my brand in a visually compelling manner. The resulting logo not only meets but exceeds expectations, drawing consistent praise for its handmade charm and clever design. Klaus's ability to infuse humor adds a unique and memorable element, making our brand stand out in the market. Collaborating with ... more"

export const CommissionsOrderPage = () => {
	const location = useLocation()
	const [imagePath, setImagePath] = useState()
	const {data} = useProductTypeList()
	
	console.log(location.pathname)

	let productTypePath= location.pathname.split('/')[3]
	console.log(location.pathname.split('/'))
	console.log(productTypePath)
	let productTypeName =""
	if(productTypePath=== "cartoon-illustration"){
		productTypeName = "Cartoon Illustration"
	}
	if(productTypePath=== "logo-lettering"){
		productTypeName = "Logo/Lettering"
	}
	if(productTypePath === "cover"){
		productTypeName = "Cover"
	}
	const productType = data?.find((product: any) => product.name === productTypeName )

	console.log(productType)
	const pathFile = `${productType?.image?.split('\\')[1]}`
	const pathImage = `${productType?.image?.split('\\')[2]}`

	const path = `${pathFile}\\${pathImage}` 
	console.log(path)

	const {data: dataImage, isLoading: isLoadingImage } = useSingleUpload(path)

	console.log(dataImage)

	useEffect(() => {
		if(!isLoadingImage){
			setImagePath(dataImage)
		}
	}, [isLoadingImage,dataImage])

	return(
		<div className="klz-commissions-order">
			<div className="klz-commissions-order__container">
				<div className="klz-commissions-order__details">
					<div className="klz-commissions-order__details__image">
						<img src={imagePath} alt="image_product"/>
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
					<FormCommission/>
				</div>
				</div>
			</div>
			{/* <ReviewCard title={title} description={description} image={image}/> */}
		</div>
	)

}