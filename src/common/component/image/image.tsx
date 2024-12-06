import SkeletonImage from "./components/skeleton-image/skeleton-image"
import { ImageTypes } from "./types"

const Image = (props: ImageTypes) =>{
	const {srcImage, altImage} = props
	return ( srcImage? ( <img src={srcImage} alt={altImage} className="klaus-product-card-image" />)
		: (<SkeletonImage/> )
	)
} 
export default Image