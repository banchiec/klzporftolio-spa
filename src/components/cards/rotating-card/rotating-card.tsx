import "./rotating-card.scss"
import { RotatingCardType } from "./types"
export const RotatingCard = (props: RotatingCardType) => {
	const { title, description, path, image } = props
	return(
		<div>
			<div className="boxesContainer">
				<div className="cardBox">
					<div className="card">
						<div className="front">
							<img src={image} alt="image_category"/>
						</div>
						<div className="back">
							<h3>Back Side One</h3>
							<p>Content in card one</p>
							<a href="#">Button 1</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}