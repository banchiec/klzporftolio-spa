import { useParams } from "react-router-dom"
import { useCategoriesList } from "../../hooks"
import vectorArrow from "../../assets/images/vector-arrow.png"
import { useEffect, useState } from "react"
import { CategoryShopViewType } from "./types"
import CardShopCategory from "../../page/shop-page/components/card-shop-category"
import { Loading } from "../../components/loading"
import { getCategoryForByName } from "./utils"
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
					{category?.productType?.map((productType: any) => (
						<CardShopCategory
							key={productType._id}
							category={productType}
						/>
					))
					}
				</div>
			</div>
		</div>
	)
}