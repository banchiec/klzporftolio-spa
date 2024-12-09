import { ProductType, ProductTypeType } from "../../../types";

export const getProductsForProductType = (products: Array<ProductType>, productTypeName: string ) => (
	products?.filter((product:any) =>(
		product.productType.find((productType: ProductTypeType)=>(productType.name === productTypeName)
	)) 
))

export const getFirstProducts = (products: Array<ProductType>, productTypeName: string, count: number) => ({
	title : productTypeName,
	products : getProductsForProductType(products, productTypeName).slice(0, count)
})

export const mappedProducts = ( products: { title?: string, products: Array<ProductType>}) => ({
	title: products?.title,
	products: products.products.map((product: any) => ({ _id: product._id, image: product.images[0].url})) 
})

