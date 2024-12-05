interface CategoryType {
	name: string
	description: string
	image: string
	available?: boolean
	productType: any[]
}
export interface CardShopCategoryType {
	category: CategoryType 
	title?: string
	// description: string
	// image: any 
	// name: string
	// available?: boolean
}