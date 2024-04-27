export interface loginStateInterface {
	loading: Boolean
	error?: String | null 
	data?: {}
}

export interface loadingLogin {
	type: loginActionType.LOADING_LOGIN
}

export interface successLogin {
	type: loginActionType.SUCCESS_LOGIN
	payload: {}
}

export interface errorLogin {
	type: loginActionType.ERROR_LOGIN
	payload: {}
}

export enum loginActionType {
	LOADING_LOGIN = 'loading_login',
	SUCCESS_LOGIN = 'success_login',
	ERROR_LOGIN = 'error_login',
}
