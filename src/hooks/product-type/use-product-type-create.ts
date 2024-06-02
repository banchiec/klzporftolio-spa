import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { postProductType } from "../../api"

export const useProductTypeCreate = () => {
	const navigate = useNavigate()
	const {mutationKey, mutationFn} = postProductType()
	const { mutate: createProductType } = useMutation({
		mutationKey: mutationKey,
		mutationFn: mutationFn,
		onSuccess: () => {
			navigate("/")
		},
		onError:(err: any) => {
			console.log(err)
		}
	})
	return { createProductType}
}
