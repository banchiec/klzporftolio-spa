import { FORM_INPUT_DEFAULT } from "../../../../../constants";

export const DEFAULT_COMMISSIONS_SELECT_VALUE = {
	label: "",
	price: 0,
	value: 0
}

export const COMMISSIONS_DEFAULT_VALUES = {
	deliveryDays: FORM_INPUT_DEFAULT.select,
	colors: FORM_INPUT_DEFAULT.select,
	description: FORM_INPUT_DEFAULT.input,
	revisions: FORM_INPUT_DEFAULT.select,
	deliveryFormat: FORM_INPUT_DEFAULT.select
}

export const COMMISSIONS_INPUTS_DEFAULT_NAMES = {
	deliveryDays: "delivery-days",
	color: "colors",
	description: "description",
	revisions: "revisions",
	deliveryFormat: "delivery-format"
}

export const FORM_COMMISSIONS_SELECTED_VALUES = 
	{
		deliveryDays: [
			{
				label: "10 Days",
				price: 0,
				value: 10
			},
			{
				label: "7 Days",
				price: 20,
				value: 7
			},
			{
				label: "4 Days",
				price: 40,
				value: 4
			}
		],
		revisions: [
			{
				label: "1 Revision",
				price: 0,
				value: 1
			},
			{
				label: "2 Revision",
				price: 10,
				value: 2
			},
			{
				label: "3 Revision",
				price: 20,
				value: 3
			},
			{
				label: "4 Revision",
				price: 30,
				value: 4
			}
		],
    deliveryFormat: [
			{
				label: "JPG + Source file",
				price: 0,
				value: 1
			},
			{
				label: "PNG + Source file",
				price: 20,
				value: 2 
			},
			{
				label: "SVG + Source file",
				price: 40,
				value: 3
			}
		],
		colors: [
			{
				label: "#CA01FD",
				price: 0,
				value: 1
			},
			{
				label: "#FF69DA",
				price: 0,
				value: 2 
			},
			{
				label: "#FFC3F0",
				price: 0,
				value: 3 
			},
			{
				label: "#42FBFF",
				price: 0,
				value: 4 
			},
			{
				label: "#B3FDFF",
				price: 0,
				value: 5 
			},
			{
				label: "#51F372",
				price: 0,
				value: 6 
			},
			{
				label: "#5FFFC0",
				price: 0,
				value: 7 
			},
			{
				label: "#FFFF5D",
				price: 0,
				value: 8 
			},
			{
				label: "#FFA454",
				price: 0,
				value: 9 
			},
			{
				label: "#FF4A77",
				price: 0,
				value: 10 
			},
		]
	}