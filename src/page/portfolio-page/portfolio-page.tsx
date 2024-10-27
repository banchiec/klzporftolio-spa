import { useEffect, useState } from "react";
import { useProductsList } from "../../hooks";
import { PRODUCT_TYPE } from "../../constants";
import { getFirstSixProducts, mappedProducts } from "./utils";
import ProductCardGroup from "../../components/product-card-group";

export const PortfolioPage = () => {
	const [products, setProducts] = useState([])
	const {data, isLoading  } = useProductsList()

	useEffect(() => {
		if(!isLoading){
			setProducts(data) 
		}
	}, [isLoading, data])

	const productsPrintables = mappedProducts(getFirstSixProducts(products, PRODUCT_TYPE.PRINTABLES)) 

	return(
		<div className="klz-portfolio-page">
			<ProductCardGroup title={productsPrintables.title} products={productsPrintables.products}/>
			<ProductCardGroup title={productsPrintables.title} products={productsPrintables.products}/>
		</div>
	)
}
