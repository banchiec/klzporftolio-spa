
export const productsTypeFromSelect = (productsType: any) => productsType?.map((productType: any) => ({
	value: productType._id,
	label: productType.name,
}))

export const categoriesFromSelect = (categories: any) => categories?.map((category: any) => ({
	value: category._id,
	label: category.name,
}))

