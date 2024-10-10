import { useEffect, useState } from "react"
import { useCategoriesList } from "../../hooks"
import { ShopPageType } from "./types"
import "./shop-page.scss"
import { Loading } from "../../components/loading"
import { LoadingWizard } from "../../components/loadingWizard"
import CardShopCategory from "./components/card-shop-category"

interface CategoryType {
}



export const ShopPage = (props: ShopPageType) => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState<any>()
	const {dataCategoriesList, isLoadingCategoriesList } = useCategoriesList()

	useEffect(()=> {
		if(isLoadingCategoriesList){
			setLoading(<Loading/>)
		}else{
			setCategories(dataCategoriesList)
		}
	},[isLoadingCategoriesList, dataCategoriesList])

	return(
		<div className="klz-shop-page">
			<div className="klz-shop-page-container">
				{ categories?.map((category:any ) =>(
					<CardShopCategory  
						key={category._id}
						category={category}
					/>
				))}
			</div>
		</div>
	)
}