import { FORM_INPUT_DEFAULT } from "../../../../../constants";

export const COMMISSIONS_DEFAULT_VALUES = {
	deliveryDays: FORM_INPUT_DEFAULT.select,
	colors: FORM_INPUT_DEFAULT.select,
	description: FORM_INPUT_DEFAULT.input,
	revisions: FORM_INPUT_DEFAULT.select,
	deliveryFormat: FORM_INPUT_DEFAULT.select
}

export const FORM_COMMISSIONS_SELECTED_VALUES = 
	{
		deliveryDays: [
			{
				"name": "1 day",
				"value": "10 day",
			},
			{
				"name": "1 day",
				"value": "20 day",
			},
			{
				"name": "1 day",
				"value": "30 day",
			}
		],
	}