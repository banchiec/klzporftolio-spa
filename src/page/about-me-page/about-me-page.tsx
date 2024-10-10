import CardAboutMe from "../../components/cards/card-about-me"
import { AboutMeTypes } from "./types"
import klausImage from "../../assets/images/about-me-klauz.jpeg"
import aboutMeData from "./utils/data"
import "./about-me-page.scss"

const AboutMePage = (props: AboutMeTypes) => {
	return(
		<div className="klz-about-me-page">
			<CardAboutMe
				title={aboutMeData.title}
				image={klausImage}
				subtitle={aboutMeData.subtitle}
				description={aboutMeData.description}
			/>
		</div>
	)
}
export default AboutMePage