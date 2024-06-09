import { CardShopCategoryType } from "./types"
import { Link } from "react-router-dom"
import { useSingleUpload } from "../../../../hooks/upload/useSingleUpload"
import { useEffect, useState } from "react"
import "./card-shop-category.scss"

export const CardShopCategory = (props: CardShopCategoryType) => {
	const { name, description, image } = props
	const [imagePath, setImagePath] = useState()

	console.log(image)
	const pathFile = `${image?.split('\\')[1]}`
	const pathImage = `${image?.split('\\')[2]}`

	const path = `${pathFile}\\${pathImage}` 

	// console.log(path)
	const {data, isLoading} = useSingleUpload(path)

	let pathCommissions= name?.toLowerCase().split(' ').join('-')

	if(name === "Logo/Lettering"){
		let nameFisrt = name.toLowerCase().split('/').join('-')
		pathCommissions = `commissions/${nameFisrt}`
	}
	if(name === "Cover"){
		pathCommissions = `commissions/${name.toLowerCase()}`
	}

	if(name === "Cartoon Illustration"){
		let nameFisrt = name.toLowerCase().split(' ').join('-')
		pathCommissions = `commissions/${nameFisrt}`
	}
	console.log(pathCommissions)

	useEffect(() => {
		if(!isLoading){
			setImagePath(data)
		}
	}, [isLoading,data])

	return(
		<div className="klz-card-shop-category">
			<div className="klz-card-shop-category-box">
				<div className="klz-card-shop-category-container">
					<Link to={`/shop/${pathCommissions}`}>
						<div className="klz-card-shop-category-front">
							{imagePath &&
								<img src={imagePath} alt="image_category"/>
							}
							</div>
						<div className="klz-card-shop-category-back">
							<div className="klz-card-shop-category__title">
								<h4>{name?.toUpperCase()}</h4>
							</div>
							<div className="klz-card-shop-category__description">
								<p>{description}</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}