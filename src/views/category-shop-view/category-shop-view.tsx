import { useParams } from "react-router-dom"
import { useCategoriesList } from "../../hooks"
import vectorArrow from "../../assets/images/vector-arrow.png"
import { useEffect, useState } from "react"
import { CategoryShopViewType } from "./types"
import { Loading } from "../../components/loading"
import { getCategoryForByName } from "./utils"
import { For } from "../../common/control"
import { ProductTypeType } from "../../types"
import CardShopType from "../../page/shop-page/components/card-shop-category"
import "./category-shop-view.scss"

export const CategoryShopView = (props: CategoryShopViewType) => {
	const params = useParams()
	const [loading, setLoading] = useState<any>()
	const {dataCategoriesList, isLoadingCategoriesList} = useCategoriesList()
	const [categories, setCategories] = useState([])

	const category = getCategoryForByName(categories, params)

	useEffect(() => {
		if (isLoadingCategoriesList) {
			setLoading(<Loading />)
		} else {
			setCategories(dataCategoriesList)
		}
	}, [isLoadingCategoriesList, dataCategoriesList])

	if (isLoadingCategoriesList) {
		return <div>{loading}</div>
	}

	const renderCardShopCategory = (productType: ProductTypeType) => {
		return(
			<CardShopType
				key={productType?._id}
				category={productType}
				title={productType.name}
			/>
		)
	}

	return (
		<div className="klz-commissions-page">
			<div className="klz-commissions-page-container">
				<div className="klz-commissions-page__header">
					<div className="klz-commissions-page__header__title">
						<h1>{category?.name}</h1>
					</div>
					<div className="klz-commissions-page__header__question">
						<p>Uncertain about <br /> what's right for you?</p>
						<img src={vectorArrow} alt="vector-arrow" />
					</div>
				</div>
				<div className="klz-commissions-page__data">
					<For each={category?.productType!} render={renderCardShopCategory} />
				</div>
			</div>
		</div>
	)
}