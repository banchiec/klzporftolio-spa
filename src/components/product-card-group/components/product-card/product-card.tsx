import { useEffect, useState } from "react"
import useSingleUpload from "../../../../hooks/upload"
import { getImagePath } from "../../../../utils/path"
import { ProductCardType } from "./types"
import CardSkeleton from "../../../cards/card-skeleton"
import "./product-card.scss"

const ProductCard = (props: ProductCardType) => {
	const { product } = props
	const [imagePath, setImagePath] = useState()
	const path = getImagePath(product?.image)
	const { data, isLoading } = useSingleUpload(path)

	useEffect(() => {
		if (!isLoading) {
			setImagePath(data)
		}
	}, [isLoading, data]) 

	return (
		<>

		{ imagePath? (
			<img src={imagePath} alt="image_category" className="klaus-product-card-image" />
			): (
				<CardSkeleton/>
			) 
		}
		</>
	)
}
export default ProductCard 