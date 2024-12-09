import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { postProducts } from "../../api/products/create"

export const useProductsCreate = () => {
	const navigate = useNavigate()
	const {mutationKey, mutationFn} = postProducts()
	const { mutate: createProduct } = useMutation({
		mutationKey: mutationKey,
		mutationFn: mutationFn,
		onSuccess: () => {
			navigate("/")
		},
		onError:(err: any) => {
			console.log(err)
		}
	})
	return { createProduct}
}
