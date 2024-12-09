import { useQuery } from "react-query"
import { fetchProductsList } from "../../api/products/list/fetchProduct"

export const useProductsList = () =>{
	const product = useQuery({
		queryKey: ['products'],
		queryFn: fetchProductsList 
	})
	return product
}
