import { CardShopCategoryType } from "./types"
import { Link } from "react-router-dom"
import { useSingleUpload } from "../../../../hooks/upload/useSingleUpload"
import { useEffect, useState } from "react"
import "./card-shop-category.scss"
import { CardShopCategorySkeleton } from "./card-shop-category-skeleton"

export const CardShopCategory = (props: CardShopCategoryType) => {
	const { category } = props
	const { name, description, image } = category
	console.log(name)
	console.log(image)
	console.log(description)
	const [imagePath, setImagePath] = useState()

	const pathFile = `${image?.split('\\')[1]}`
	const pathImage = `${image?.split('\\')[2]}`

	const path = `${pathFile}\\${pathImage}`

	const { data, isLoading } = useSingleUpload(path)

	let pathCommissions = name?.toLowerCase().split(' ').join('-')

	if (name === "Logo/Lettering") {
		let nameFisrt = name.toLowerCase().split('/').join('-')
		pathCommissions = `commissions/${nameFisrt}`
	}
	if (name === "Cover") {
		pathCommissions = `commissions/${name?.toLowerCase()}`
	}

	if (name === "Cartoon Illustration") {
		let nameFisrt = name?.toLowerCase().split(' ').join('-')
		pathCommissions = `commissions/${nameFisrt}`
	}

	useEffect(() => {
		if (!isLoading) {
			setImagePath(data)
		}
	}, [isLoading, data])

	return (
		<div className="klz-card-shop-category">
			<div className="klz-card-shop-category-box">
				<div className="klz-card-shop-category-container">
					<Link to={`/shop/${pathCommissions}`}>
						{image ? (
							<>
								<div className="klz-card-shop-category-front">
									{imagePath &&
										<img src={imagePath} alt="image_category" />
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
							</>
						) : (
							<>
								<CardShopCategorySkeleton />
								<div className="klz-card-shop-category-back">
									<div className="klz-card-shop-category__title">
										<h4>{name?.toUpperCase()}</h4>
									</div>
									<div className="klz-card-shop-category__description">
										<p>{description}</p>
									</div>
								</div>


							</>
						)}
					</Link>
				</div>
			</div>
		</div>
	)
}