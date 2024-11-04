import { Link } from "react-router-dom"
import { ProductCard } from "./components"
import { ProductCardGroupTypes } from "./types"
import "./product-card-group.scss"

const ProductCardGroup = (props: ProductCardGroupTypes) => {
	const { title, products} = props

	return (
		<div className="klz-portfolio-group-card">
			<div className="klz-portfolio-group-card-title">
				<p >{title}</p>
			</div>
			<div className="klz-portfolio-group-card__container">
				{ products.map((product: {_id: string, image: string}, indice: number) =>{
					return (
						<div key={product._id}>
							<Link to={`/shop/stuff-you-can-buy/${product._id}`}>
								<ProductCard key={indice} product={product} />
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ProductCardGroup 