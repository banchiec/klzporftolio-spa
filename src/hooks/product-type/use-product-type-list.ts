import { useQuery } from "react-query"
import { fetchProductTypeList } from "../../api/product-type/list/fetchProducttypeList"

export const useProductTypeList = () => {
	const { data, isLoading, isSuccess, isError} = useQuery({
		queryKey: ["product-type"],
		queryFn: () => fetchProductTypeList(),
	})
	return { data, isLoading, isSuccess, isError} 
}