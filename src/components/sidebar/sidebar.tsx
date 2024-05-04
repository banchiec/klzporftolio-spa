import CloseIcon from "../../assets/icons/close"
import { SidebarType } from './type';
import logo_color from "../../assets/images/logo_color.png"
	import "./sidebar.scss"
import { Link } from "react-router-dom";


const Sidebar = (props: SidebarType) => {
	const {data, setVisible } = props
	
	const handleClick = () => {
		setVisible(false)
	}
	return(
		<div className="klz-header-modal__menu-modal">
			<div className="klz-header-modal__menu-content">
				<div className="klz-header-modal__modal__header" >
					<div className="klz-header-modal__modal__header__icon" onClick={handleClick}>
						<CloseIcon/>
					</div>
				</div>
				<div className="klz-header-modal__modal__menu">
					<ul>
						{data.map((item)=> (
								<Link to={item.url} key={item.label} onClick={handleClick}>
								<li key={item.label}>{item.label}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="klz-header-modal__footer">
					<div className="klz-header-modal__footer__logo">
						<img src={logo_color} alt="image_logo"/>
					</div>
				</div>
			</div>
		</div>
	)

}
export default Sidebar