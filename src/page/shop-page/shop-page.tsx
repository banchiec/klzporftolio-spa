import { useEffect, useState } from "react"
import { useCategoriesList } from "../../hooks"
import { ShopPageType } from "./types"
import CardShopCategory from "./components/card-shop-category"
import { For, RenderIf } from "../../common/control"
import "./shop-page.scss"

export const ShopPage = (props: ShopPageType) => {
	const [categories, setCategories] = useState([])
	const {dataCategoriesList, isLoadingCategoriesList } = useCategoriesList()

	useEffect(()=> {
		if(!isLoadingCategoriesList){
			setCategories(dataCategoriesList)
		}
	},[isLoadingCategoriesList, dataCategoriesList])

	const renderCardCategory = (category:any) =>{
		return(
			<CardShopCategory
				key={category._id}
				category={category}
			/>
		)
	}

	return(
		<div className="klz-shop-page">
			<div className="klz-shop-page-container">
				<RenderIf condition={!isLoadingCategoriesList}>
					<For each={categories} render={renderCardCategory}/>
				</RenderIf>
			</div>
		</div>
	)
}
