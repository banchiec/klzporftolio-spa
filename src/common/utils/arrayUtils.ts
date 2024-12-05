export function groupBy(arr: any[], criteria: any) {
	return arr.reduce((accumlator, item) => {
		const key = typeof criteria === "function"? criteria(item) : item[criteria];
		if(!accumlator[key]) accumlator[key] = []
		accumlator[key].push(item)
		return accumlator
	}, {})
}

export const sortArrayByFieldName = (array: any[], fieldName: string) => {
	const result = [...array].sort((item1, item2) => (item1[fieldName] > item2[fieldName] ? 1: -1 ) )
	return result
}