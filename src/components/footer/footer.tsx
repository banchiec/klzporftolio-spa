import { FooterType } from "./types"
import instagram from "../../assets/images/instagram.png"
import pinterest from "../../assets/images/pinterest.png"
import linkedIn from "../../assets/images/linkedin.png"
import "./footer.scss"

const Footer = ( props: FooterType) => {
	return(
		<div className="klz-footer">
			<div className="klz-footer-container">
				<div className="klz-footer__social-media">
					<div className="klz-footer__social-media__icon">
						<img src={instagram} alt="Instagram"/>
					</div>
					<div className="klz-footer__social-media__icon">
						<img src={pinterest} alt="Pinterest"/>
					</div>
					<div className="klz-footer__social-media__icon">
						<img src={linkedIn} alt="LinkedIn"/>
					</div>
				</div>
				<div className="klz-footer__contactme">
					<h4>klausjohannes@art.com</h4>
				</div>
			</div>
		</div>
	)
}
export default Footer 