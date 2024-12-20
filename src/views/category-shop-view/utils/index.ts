import { CategoryType } from "../../../types"

export const getPathForName = (name: string) => {
	return name?.toLowerCase().replaceAll(" ", "-")
}

export const  getCategoryForByName = (categories: Array<CategoryType>, params: any) => {
	return categories?.find((category: CategoryType) => {
		return getPathForName(category.name) ===  params.category
	})
}