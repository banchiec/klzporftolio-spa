import { ArrowLeft, HamburgerMenu } from "../../assets/icons"
import { HeaderType } from "./types"
import { useState } from "react"
import Sidebar from "../sidebar"
import logo from "../../assets/images/logo.png"
import contactme from "../../assets/images/contactme.png"
import "./header.scss"

const menuItems = [
	{
		label: "Home",
		url: "/",
	},
	{
		label: "Portfolio",
		url: "/portfolio",
	},
	{
		label: "About me",
		url: "/About-me",
	},
	{
		label: "Shop",
		url: "/shop",
	},
	{
		label: "Contact me",
		url: "/contact-me",
	},
]

const menuItemsDesktop = [
	{
		label: "Portfolio",
		url: "/portfolio",
	},
	{
		label: "Shop",
		url: "/shop",
	},
	{
		label: "About Me",
		url: "/About-me",
	},
]

const Header = (props: HeaderType) => {
	const [visible, setVisible] = useState(false)
	const handleClick = () => {
		setVisible(!visible)
	}
	return (
		<>
			<div className="klz-header">
				<div className="klz-header__desktop">
					<div className="klz-header__desktop__logo">
						<img src={logo} alt="image__logo"/>
					</div>
					<div className="klz-header__desktop__menu">
						<ul>
							{menuItemsDesktop.map((item)=> (
								<li key={item.label}>{item.label}</li>
							))}
						</ul>
						<div className="klz-header__desktop__button-contactme">
							<button> <img src={contactme} alt="contact me"/>Contact Me</button>
						</div>
					</div>
				</div>
				<div className="klz-header__mobile">
					<div className="klz-header__arrow-back">
						<ArrowLeft/>
					</div>
					<div className="klz-header__hamburger-menu" onClick={handleClick}>
						<HamburgerMenu />
					</div>
				</div>
			</div>
			{visible && (
				<Sidebar data={menuItems} setVisible={setVisible} />
			)}
		</>
	)
}
export default Header 