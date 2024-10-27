import { CardShopCategoryType } from "./types"
import { Link, useParams } from "react-router-dom"
import { useSingleUpload } from "../../../../hooks/upload/useSingleUpload"
import { useEffect, useState } from "react"
import "./card-shop-category.scss"
import { CardShopCategorySkeleton } from "./card-shop-category-skeleton"
import { getImagePath } from "../../../../utils/path"

export const CardShopCategory = (props: CardShopCategoryType) => {
	const { category } = props
	const { name, description, image } = category
	const [imagePath, setImagePath] = useState()

	const path = getImagePath(image) 

	console.log(path);
	const { data, isLoading } = useSingleUpload(path)
	console.log(data);

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