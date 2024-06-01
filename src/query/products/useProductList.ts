import { useQuery } from "react-query"
import { fetchProductsList } from "../../api/products/fetchProduct"

export const useProductsList = () =>{
	const product = useQuery({
		queryKey: ['products'],
		queryFn: fetchProductsList 
	})
	return product
}
