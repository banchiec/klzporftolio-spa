import { shoesApi } from "../../api/api.data"
import { Card } from "../core/card"
import './gallery.scss'

const Gallery = () => {

	return(
		<div className="gallery-product">
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
export default Gallery