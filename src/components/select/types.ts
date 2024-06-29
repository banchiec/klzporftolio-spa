import React from "react"

export interface SelectType {
	name: string
	options: any
	onChange?: any
	onBlur: any
	onSelect?: any
	ref?: any
	label?: any
	multiselect?: boolean
	className?: string
}