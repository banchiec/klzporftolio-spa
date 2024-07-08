export interface CustomOptionType {
	label: string,
	price: number,
	value: number,
} 

export interface CustomSelectType {
	name: string,
	label: string,
	value: any,
	setOption: any,
	customSelectRef: any
	options: Array<CustomOptionType> 
}
