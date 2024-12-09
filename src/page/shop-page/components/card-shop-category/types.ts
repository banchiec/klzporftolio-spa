interface CategoryType {
	name: string
	description: string
	image: string
	available?: boolean
	productType: any[]
}
export interface CardShopCategoryType {
	category: CategoryType 
	// description: string
	// image: any 
	// name: string
	// available?: boolean
}