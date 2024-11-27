import { useEffect, useState } from "react";
import { HomeViewType } from "./types"
import { useProductsList } from "../../hooks";
import { HomeProductGroup } from "./components/home-product-group/home-product-group";
import { ProductType } from "../../types";
import { LoaderDots } from "../../components/loader-solar-system";
import "./home-page-view.scss";

export const HomePageView = (props: HomeViewType) => {
	const [products, setProducts] = useState<Array<ProductType>>([]);
	const {data, isLoading  } = useProductsList(); 

	useEffect(() => {
	if(!isLoading) {
		setProducts(data);
	}
	}, [data, isLoading]); 

	const productsGroup: Array<{_id: number, image: string}> = products?.map((product:ProductType) => (
		{
			_id: product._id, 
			image: product.images[0].url
		}
	)).slice(0,11)

	return (
		<div className="klz-portfolio-home-page-view"> 
			<div className="klz-portfolio-home-page-view__title">
				<h2 >Hi. I’m Klaus Johannes Aksberg.<br/> An Artist from Estonia</h2>
			</div>
			<div className="klz-portfolio-home-page-view__container-group">
				{products ? (
					<HomeProductGroup  products={productsGroup}/>
				): (
					<LoaderDots/>
				)}
			</div>
		</div>
	)
}