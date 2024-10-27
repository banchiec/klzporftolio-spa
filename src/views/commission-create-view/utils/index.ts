import { CATEGORY } from "../../../constants"

export const getNameForUrlProductType = ( locationImage: string) =>{
	let imgProductTypeName= ''
	if(locationImage === CATEGORY.COMMISSIONS.cartonIlustrtion){
		imgProductTypeName = "Cartoon Illustration"
	}
	if(locationImage === CATEGORY.COMMISSIONS.logoLettering){
		imgProductTypeName = "Logo/Lettering"
	}
	if(locationImage === CATEGORY.COMMISSIONS.cover){
		imgProductTypeName = "Cover"
	}

	return imgProductTypeName
}
export const getPathImageForProductTypeName = (data: any, productTypeName: string) => {

	const productType = data?.find((product: any) => product.name === productTypeName)

	const pathFile = `${productType?.image?.split('\\')[1]}`
	const pathImage = `${productType?.image?.split('\\')[2]}`
	const path = `${pathFile}\\${pathImage}` 

	return path

}

export const getProductTypeByName = (data: any, name: string) => ( data?.find( (product: any) => product.name === name) )
