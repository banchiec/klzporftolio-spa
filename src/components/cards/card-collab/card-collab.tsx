import { CardCollabType } from "./types"
import "./card-collab.scss"
import CardSkeleton from "../card-skeleton";
import { useEffect, useState } from "react";
import { getImagePath } from "../../../utils/path";
import useSingleUpload from "../../../hooks/upload";

export const CardCollab = (props: CardCollabType) => {
	const { image, title, description } = props
	const  [imagePath, setImagePath] = useState()
	const path = getImagePath(image)
	const { data, isLoading } = useSingleUpload(path)

	useEffect(() => {
		if(!isLoading){
			setImagePath(data)
		}
	}, [isLoading, data])

	return(
		<div className="klz-portfolio-card-collab">
			<div className="klz-portfolio-card-collab__image">
				{imagePath ? (
					<img src={imagePath} alt={title} />
				):(
					<CardSkeleton/>
				)}
			</div>
			<div className="klz-portfolio-card-collab__text">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}