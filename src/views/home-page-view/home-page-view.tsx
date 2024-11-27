import { useEffect, useState } from "react";
import { HomeViewType } from "./types"
import { useProductsList } from "../../hooks";
import { HomeProductGroup } from "./components/home-product-group/home-product-group";
import { mappedProducts } from "../../page/portfolio-page/utils";
import "./home-page-view.scss";

export const HomePageView = (props: HomeViewType) => {
 
 const [products, setProducts] = useState([]);
 const {data, isLoading  } = useProductsList(); 

 useEffect(() => {
	if(!isLoading) {
		setProducts(data);
	}
 }, [data, isLoading]); 


const getAllProducts = mappedProducts({products: products}); 

	return (
		<>  
			<div>
				<h1 className="home-page-view-title">Hi. I’m Klaus Johannes Aksberg.<br/>
				An Artist from Estonia</h1>
			</div>
			{ products ? (
				<HomeProductGroup  products={products? getAllProducts : undefined}/>
			): (
				<div>Loading...</div>
			)}
		</>
	)
}