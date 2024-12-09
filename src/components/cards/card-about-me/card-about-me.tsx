import { CardAboutMeType } from "./types";
import AboutMeKlauz from "../../../assets/images/about-me-klauz.jpeg"
import CardSkeleton from "../card-skeleton";
import "./card-about-me.scss"

const CardAboutMe = (props: CardAboutMeType) => {
	return(
		<div className="klz-about-me-card">
			<div className="klz-about-me-card-container">
				<div className="klz-about-me-card-header">
					<h1 className="klz-about-me-card-header__title">KLAUS</h1>
					<p className="klz-about-me-card-header__motto">"Perfection in imperfection."</p>
				</div>
				<section className="klz-about-me-card-main">
					{AboutMeKlauz ? (
						<div className="klz-about-me-card-main__container">
							<img src={AboutMeKlauz} alt="About Me"/>
						</div>
					):(
						<CardSkeleton/>
					)}
					
					<div className="klz-about-me-card-main__description">
						<p>Hello there! I'm <span className="klz-klaus-name">KLAUS JOHANNES</span>, a passionate artist from Estonia with a love for blending the timeless charm of hand-sketching with the boundless possibilities of retro-futurism. As you explore my portfolio, you'll discover a journey through time and imagination, where every stroke tells a story and every piece is a portal to a different era.</p><br/><br/>
						<p>Thank you for stepping into my world of hand-drawn wonders and retro-futuristic musings. I hope my illustrations ignite your imagination and transport you to a realm where the past and future harmoniously coexist. Let's embark on a journey through time together!</p>
					</div>
				</section>
			</div>
		</div>
	)
}
export  default CardAboutMe;