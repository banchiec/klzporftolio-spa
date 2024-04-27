import { errorLogin, loadingLogin, loginActionType, loginStateInterface, successLogin } from "./loginReducertype";

type ActionLogin = loadingLogin | successLogin | errorLogin

const loginReducer = (state: loginStateInterface, action: ActionLogin): loginStateInterface => {
	switch(action.type){
		case loginActionType.LOADING_LOGIN:
			return {loading: true, error: null , data: {} }
		case loginActionType.SUCCESS_LOGIN: 
			return {loading: false, error: null , data: action.payload }
		default:
			return state;
	}
}
export default loginReducer