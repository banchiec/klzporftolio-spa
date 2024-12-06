import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CardShopTypeTypes } from "./types"
import { useSingleUpload } from "../../../../hooks/upload/useSingleUpload"
import { RenderIf } from "../../../../common/control"
import { getImagePath } from "../../../../utils/path"
import RotatingCard from "../../../../common/component/card/rotating-card"
import "./card-shop-type.scss"

export const CardShopType= (props: CardShopTypeTypes) => {
	const { category, title} = props
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
		<div className="klz-card-shop-type">
			<div className="klz-card-shop-type__container">
				<Link to={`/shop/${pathCommissions}`}>
					<RenderIf condition={!!imagePath}>
						<RenderIf condition={imagePath!}>
							<RotatingCard image={imagePath!} title={title!} description={description}/>
							<h3>{title?.toUpperCase()}</h3>
						</RenderIf>
					</RenderIf>
				</Link>
			</div>
		</div>
	)
}