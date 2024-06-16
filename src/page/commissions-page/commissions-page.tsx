import CardShopCategory from "../shop-page/components/card-shop-category"
import vectorArrow from "../../assets/images/vector-arrow.png"
import { useProductTypeList } from "../../hooks"
import { useEffect, useState } from "react"
import "./commissions-page.scss"
import { useParams } from "react-router-dom"

export const CommissionsPage = () => {
	const [productsTypes, setProductsTypes] = useState([])
	const {data, isLoading } = useProductTypeList()
	const params = useParams()
	console.log(params)

	useEffect(() => {
		if(!isLoading){
			setProductsTypes(data)
		}
	}, [isLoading,data])

	return (
		<div className="klz-commissions-page">
			<div className="klz-commissions-page-container">
				
				<div className="klz-commissions-page__header">
					<div className="klz-commissions-page__header__title">
						<h1>Commissions</h1>
					</div>
					<div className="klz-commissions-page__header__question">
						<p>Uncertain about <br/> what's right for you?</p>
						<img src={vectorArrow} alt="vector-arrow"/>
					</div>
				</div>
				<div className="klz-commissions-page__data">
					{/* { productsTypes?.map((productType: any) => (
						<CardShopCategory
							key={productType._id}
							name={productType.name}
							description={productType.description}
							image={productType.image}
						/>
					))
					} */}
				</div>
			</div>
		</div>
	)
}