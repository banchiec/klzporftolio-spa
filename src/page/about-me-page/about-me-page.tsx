import CardAboutMe from "../../components/cards/card-about-me"
import { AboutMeTypes } from "./types"
import "./about-me-page.scss"

const AboutMePage = (props: AboutMeTypes) => {
	return(
		<div className="klz-about-me-page"><CardAboutMe/></div>
	)
}
export default AboutMePage