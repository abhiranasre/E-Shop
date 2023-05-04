export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case 'LOGIN_REQUEST':
            case 'LOAD_REQUEST':
            return {
                loading: true,
                isAuthenticated: false
            }
        case 'LOGIN_SUCCESS':
            case'LOAD_SUCCESS':
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
      
        case 'LOGIN_FAIL':
            case'LOAD_FAIL':
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
     
        default:
            return state;
    }
}