import { useQuery } from "react-query"
import { fetchCategoriesList } from "../../api/categories/list/fetchCategoriesList"

export const useCategoriesList = () => {
	const { data, isLoading, isSuccess, isError} = useQuery({
		queryKey: ["product-type"],
		queryFn: () => fetchCategoriesList(),
	})
	return { data, isLoading, isSuccess, isError} 
}