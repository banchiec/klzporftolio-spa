import { useQuery } from "react-query"
import { fetchProductsList } from "../../api/products/list/fetchProduct"

export const useProductsList = () => {
	const { data, isLoading, isSuccess, isError} = useQuery({
		queryKey: ["product-list"],
		queryFn: () => fetchProductsList(),
	})
	return { data, isLoading, isSuccess, isError} 
}