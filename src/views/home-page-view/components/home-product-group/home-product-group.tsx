import { Link } from "react-router-dom";
import { HomeProductGroupTypes } from "../../../../components/product-card-group/types"
import "../home-product-group/home-product-group.scss"
import { ProductCard } from "../../../../components/product-card-group/components";

export const HomeProductGroup = (props: HomeProductGroupTypes) => {
const {products} = props; 
const firstThree = products.products.slice(0, 3);
const nextThree = products.products.slice(3, 6);
const lastProducts = products.products.slice(0, 2);
    return (
		<div className="klz-portfolio-product-home-group">
			<div className="klz-portfolio-product-home-group__container"> 
				{products?.products.map((product: any, indice: number) =>{
					return (
						<div key={product._id} className="klz-portfolio-product-home-group__container-product">
							<Link to={`/shop/stuff-you-can-buy/${product._id}`}>
								<ProductCard key={indice} product={product} />
							</Link>
						</div>)
				})}
			 {/* 	{ firstThree.map((product: {_id: string, image: string}, indice: number) =>{
					return (
						<div key={product._id} className="klz-portfolio-group-card-product-card">
							<Link to={`/shop/stuff-you-can-buy/${product._id}`}>
								<ProductCard key={indice} product={product} />
							</Link>
						</div>
					)
				})}
			*/}
			</div>
			{/**
			 * 
			<div className="klz-portfolio-group-card-home__container2"> 
				{ nextThree.map((product: {_id: string, image: string}, indice: number) =>{
					return (
						<div key={product._id} className="klz-portfolio-group-card-product-card">
							<Link to={`/shop/stuff-you-can-buy/${product._id}`}>
								<ProductCard key={indice} product={product} />
							</Link>
						</div>
					)
				})}
			</div>
			<div className="klz-portfolio-group-card-home__container3"> 
				{ nextThree.map((product: {_id: string, image: string}, indice: number) =>{
					return (
						<div key={product._id} className="klz-portfolio-group-card-product-card">
							<Link to={`/shop/stuff-you-can-buy/${product._id}`}>
								<ProductCard key={indice} product={product} />
							</Link>
						</div>
					)
				})}
			</div>
			<div className="klz-portfolio-group-card-home__container4"> 
				{ lastProducts.map((product: {_id: string, image: string}, indice: number) =>{
					return (
						<div key={product._id} className="klz-portfolio-group-card-product-card">
							<Link to={`/shop/stuff-you-can-buy/${product._id}`}>
								<ProductCard key={indice} product={product} />
							</Link>
						</div>
					)
				})}
			</div>
			 */}
		</div>
 	)
}