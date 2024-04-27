interface RepositoriesState {
	loading: boolean
	error?: string | null  
	data: string[] 
}

interface SearchRepositoriesAction {
	type: Actiontype.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
	type: Actiontype.SEARCH_REPOSITORIES_SUCCESS 
	payload: string[]
}

interface SearchRepositoriesErrorAction {
	type: Actiontype.SEARCH_REPOSITORIES_ERROR 
	payload: string
}

type Action = | SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction

enum Actiontype {
	SEARCH_REPOSITORIES = 'search_repositories',
	SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
	SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
	switch(action.type){
		case Actiontype.SEARCH_REPOSITORIES: 
			return { loading: true, error: null, data: []}
		case Actiontype.SEARCH_REPOSITORIES_SUCCESS: 
			return { loading: false, error: null, data: action.payload}
		case Actiontype.SEARCH_REPOSITORIES_ERROR: 
			return { loading: false, error: action.payload, data: []}
		default:
			return  state
	}
}
export default reducer