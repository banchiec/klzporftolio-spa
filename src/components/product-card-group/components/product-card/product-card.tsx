import { useEffect, useState } from "react"
import useSingleUpload from "../../../../hooks/upload"
import { getImagePath } from "../../../../utils/path"
import { ProductCardType } from "./types"

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
		<><img src={imagePath} alt="image_category" /></>
	)
}
export default ProductCard 