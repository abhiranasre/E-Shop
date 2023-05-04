import axios from 'axios';
import { loginRoute } from '../utils/API.routes';

export const login = (user) => async (dispatch) => {

    try {
        dispatch({ type: "LOGIN_REQUEST"});
        const res = await axios.post(loginRoute, user);

        if (res.data.success === true) {
            localStorage.setItem('token', res.data.token)
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data.user
            })
        } else if(res.data.success === false) {
            dispatch({
                type: "LOGIN_FAIL",
                payload: res.data.message
            })

        }
    } catch (error) {
        dispatch({
            type: "LOAD_FAIL",
            payload: error.response.data.message
        })
        
    }
};