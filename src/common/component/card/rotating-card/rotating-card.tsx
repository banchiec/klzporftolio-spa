import { RotatingCardType } from "./types"
import Image from "../../image/image"
import "./rotating-card.scss"
export const RotatingCard = (props: RotatingCardType) => {
	const { title, description, image } = props

	return(
		<div className="card">
			<div className="face front">
				<Image srcImage={image!} altImage={title} />
				<img src={image} alt="image_category"/>
			</div>
			<div className="face back">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}