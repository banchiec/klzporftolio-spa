import { useEffect, useState } from "react"
import { useCategoriesList } from "../../hooks"
import { ShopPageType } from "./types"
import CardShopCategory from "./components/card-shop-category"
import "./shop-page.scss"
import { LoaderDots } from "../../components/loader-solar-system"


export const ShopPage = (props: ShopPageType) => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState<any>()
	const {dataCategoriesList, isLoadingCategoriesList } = useCategoriesList()

	useEffect(()=> {
		if(isLoadingCategoriesList){
			setLoading(<LoaderDots/>)
		}else{
			setCategories(dataCategoriesList)
		}
	},[isLoadingCategoriesList, dataCategoriesList])

	return(
		<div className="klz-shop-page">
			<div className="klz-shop-page-container">
				{ !isLoadingCategoriesList? categories?.map((category:any ) => (
					<CardShopCategory  
						key={category._id}
						category={category}
					/>
				)): (
					<>{loading}</>
				)}
			</div>
		</div>
	)
}
