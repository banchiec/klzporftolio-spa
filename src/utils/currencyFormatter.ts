export const currencyFormatter = (currency:any, value:any) =>{
	const formatter = Intl.NumberFormat('de-DE', {
		style: 'currency',
		minimumFractionDigits: 2,
		currency: currency
	})
	return formatter.format(value)
}