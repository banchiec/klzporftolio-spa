import { useContext, useEffect, useState } from "react";
import { useProductsList } from "../../hooks";
import { PRODUCT_TYPE } from "../../constants";
import { getFirstProducts, mappedProducts } from "./utils";
import ProductCardGroup from "../../components/product-card-group";
import CardCollab from "../../components/cards/card-collab";
import { ProductCardSixGroup } from "../../components/product-card-six-group";
import { CartContext } from "../../context/cartContext";

export const PortfolioPage = () => {
	const [products, setProducts] = useState([])
	const {data, isLoading  } = useProductsList()  

	

	useEffect(() => {
		if(!isLoading){
			setProducts(data) 
			}
	}, [isLoading, data])

	const productsPrintables = mappedProducts(getFirstProducts(products, PRODUCT_TYPE.PRINTABLES, 6)) 
	const productsStickers = mappedProducts(getFirstProducts(products, PRODUCT_TYPE.STICKERS, 5))  

	return(
		<div className="klz-portfolio-page">
			<ProductCardSixGroup
				title={PRODUCT_TYPE.PRINTABLES} 
				products={productsPrintables.products}
			/>
			<ProductCardGroup 
				title={PRODUCT_TYPE.STICKERS} 
				products={productsStickers.products} 
			/>
			<CardCollab 
				image={productsPrintables?.products[0]?.image} 
				title={"@Remedy_baltic"}
				description={"his collaboration is not just about art; it's about community. Join the conversation, share your favorite moments, and connect with fellow fans on our social media platforms. [Illustrator's Name] and [Basketball Club Name] invite you to be a part of this vibrant community that celebrates the intersection of sports and creativity."}
			/>
		</div>
	)
}