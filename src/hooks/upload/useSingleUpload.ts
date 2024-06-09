import { useQuery } from "react-query"
import { fetchSingleUploadQuery } from "../../api/upload/single"

export const useSingleUpload = (image:any) => {
	const { data, isLoading, isSuccess, isError } = useQuery(fetchSingleUploadQuery(image))
	return {data, isLoading, isSuccess, isError }
}