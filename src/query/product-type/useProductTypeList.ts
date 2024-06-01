import { useQuery } from "react-query"
import { fetchCategoriesList } from "../../api/categories/fetchCategoriesList"

export const useProductTypeList = () => {
	const productTypeQuery = useQuery({
		queryKey: ["product-type"],
		queryFn: () => fetchCategoriesList(),
	})
	return productTypeQuery 
}