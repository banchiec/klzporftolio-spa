import { useQuery } from "react-query"
import { fetchCategoriesList } from "../../api/categories/fetchCategoriesList"

export const useCategoriesList = () => {
	const categoriesQuery = useQuery({
		queryKey: ["categories"],
		queryFn: () => fetchCategoriesList(),
	})
			return categoriesQuery
}