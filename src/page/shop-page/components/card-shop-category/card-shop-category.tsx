import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CardShopCategoryType } from "./types"
import { useSingleUpload } from "../../../../hooks/upload/useSingleUpload"
import { RenderIf } from "../../../../common/control"
import Image from "../../../../common/component/image/image"
import { getImagePath } from "../../../../utils/path"
import "./card-shop-category.scss"

export const CardShopCategory = (props: CardShopCategoryType) => {
	const { category, title} = props
	console.log("object");
	const { name, description, image } = category
	const [imagePath, setImagePath] = useState()

	const path = getImagePath(image) 

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
					<RenderIf condition={!!image}>
						<div className="klz-card-shop-category-front">
							<div className="klz-card-shop-category-front__title">
								<p>{category.name.toUpperCase()}</p>
							</div>
							<RenderIf condition={imagePath!}>
								<Image srcImage={imagePath!} altImage={imagePath!} title={title}/>
							</RenderIf>
						</div>
					</RenderIf>
					</Link>
				</div>
			</div>
		</div>
	)
}