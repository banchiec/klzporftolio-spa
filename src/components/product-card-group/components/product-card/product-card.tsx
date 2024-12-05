import { useEffect, useState } from "react"
import useSingleUpload from "../../../../hooks/upload"
import { getImagePath } from "../../../../utils/path"
import { RenderIf } from "../../../../common/control"
import { ProductCardType } from "./types"
import Image from "../../../../common/component/image/image"
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
		<RenderIf condition={imagePath!}>
			<Image srcImage={imagePath!} altImage={"image"}/>
		</RenderIf>
	)
}
export default ProductCard 