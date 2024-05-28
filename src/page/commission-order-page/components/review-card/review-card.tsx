import { ReviewCardType } from "./types"
import "./review-card.scss"

export const ReviewCard = (props: ReviewCardType) => {
	const { title, description, image} = props
	return(
		<div className="klz-review-card">
			<div className="klz-review-card__container">
				<div className="klz-review-card__title">
					<h3>{title}</h3>
				</div>
				<div className="klz-review-card__description">
					<p>{description}</p>
					<div className="klz-review-card__description__image">
						<img src={image} alt={title}/> 
					</div>
				</div>
			</div>
		</div>
	)
}