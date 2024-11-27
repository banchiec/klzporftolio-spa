import { useEffect, useState } from "react";
import { useProductsList } from "../../hooks";
import { PRODUCT_TYPE } from "../../constants";
import { getFirstSixProducts, mappedProducts } from "./utils";
import ProductCardGroup from "../../components/product-card-group";

export const PortfolioPage = () => {
	const [products, setProducts] = useState([])
	const {data, isLoading  } = useProductsList() 

	console.log(products, "products");

	useEffect(() => {
		if(!isLoading){
			setProducts(data) 
		}
	}, [isLoading, data])

	const productsPrintables = mappedProducts(getFirstSixProducts(products, PRODUCT_TYPE.PRINTABLES)) 
	const productsStickers = mappedProducts(getFirstSixProducts(products, PRODUCT_TYPE.STICKERS))  

	return(
		<div className="klz-portfolio-page">
			<ProductCardGroup 
				title={PRODUCT_TYPE.PRINTABLES} 
				products={productsPrintables.products}
			/>
			<ProductCardGroup 
				title={PRODUCT_TYPE.STICKERS} 
				products={productsStickers.products}
			/>
		</div>
	)
}
