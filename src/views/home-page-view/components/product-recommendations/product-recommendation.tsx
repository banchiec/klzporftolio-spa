
import { shoesApi } from "../../../../api/api.data"
import { Card } from "../../../../components/core/card"
import { ProductRecommendationType } from './types';
import "./product-recommendations.scss";

export const ProductRecommendation = (props: ProductRecommendationType) => {
	return (
		<div className="hard-app-product-recommendation"> 
			{ shoesApi?.map((shoesOne) => {
				return(
					<Card
						key={shoesOne.id}
						image={shoesOne.main_picture_url} 
						title={shoesOne.brand_name}
						description={shoesOne.details}
						price={shoesOne.retail_price_cents}
          />
				)
			 })
			}
		</div>
	)
}