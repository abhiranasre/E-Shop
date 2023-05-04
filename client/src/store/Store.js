import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from '../reducer/User.reducer';


const reducer = combineReducers({
   
    auth: userReducer,
   
})



const middleware = [thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))


export default store;