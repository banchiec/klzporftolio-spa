import { CardCollabType } from "./types"
import CardSkeleton from "../card-skeleton";
import { useEffect, useState } from "react";
import { getImagePath } from "../../../utils/path";
import useSingleUpload from "../../../hooks/upload";
import "./card-collab.scss"

export const CardCollab = (props: CardCollabType) => {
	const { image, title, description } = props
	const [imagePath, setImagePath] = useState()
	const path = getImagePath(image)
	const { data, isLoading } = useSingleUpload(path)

	useEffect(() => {
		if(!isLoading){
			setImagePath(data)
		}
	}, [isLoading, data])

	return(
		<div className="klz-portfolio-card-collab">
			<div className="klz-portfolio-card-collab__title">
				<h2>Collabs</h2>
			</div>
			<div className="klz-portfolio-card-collab__content">
				<div className="klz-portfolio-card-collab__image">
					{ imagePath ? (
						<>
							<div>
								<img src={imagePath} alt={title} />
							</div>
							<div>
								<img src={imagePath} alt={title} />
							</div>
							<div>
								<img src={imagePath} alt={title} />
							</div>

						</>
						):(
							<CardSkeleton/>
						)
					}
				</div>
				<div className="klz-portfolio-card-collab__text">
					<div className="klz-portfolio-card-collab__text-container">
						<div>
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}