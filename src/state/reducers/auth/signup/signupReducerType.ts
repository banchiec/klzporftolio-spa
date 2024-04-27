export interface signupStateInterface {
	loading: Boolean
	error?: String | null 
	data?: {}
}

export interface loadingsignup {
	type: signupActionType.LOADING_SIGNUP
}

export interface successsignup {
	type: signupActionType.SUCCESS_SIGNUP
	payload: {}
}

export interface errorsignup {
	type: signupActionType.ERROR_SIGNUP
	payload: {}
}

export enum signupActionType {
	LOADING_SIGNUP = 'loading_signup',
	SUCCESS_SIGNUP = 'success_signup',
	ERROR_SIGNUP = 'error_signup',
}
