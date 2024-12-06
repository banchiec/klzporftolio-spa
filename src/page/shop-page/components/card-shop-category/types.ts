import { ProductTypeType } from "../../../../types"

interface CategoryType {
	name: string
	description: string
	image: string
	available?: boolean
	productType: any[]
}
export interface CardShopTypeTypes {
	category: CategoryType | ProductTypeType 
	title?: string
	// description: string
	// image: any 
	// name: string
	// available?: boolean
}