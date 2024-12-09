export interface CustomOptionType {
	label: string,
	price: number,
	value: number,
} 

export interface CustomSelectType {
	name: string,
	label: string,
	value: any,
	price?: number,
	setOption?: any,
	setPrice?: any,
	customSelectRef: any
	options: Array<CustomOptionType> 
}
