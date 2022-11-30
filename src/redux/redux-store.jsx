import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import {blogReducer} from './blog-reducer';
import {petReducer} from './pet-reducer';
import {userReducer} from './user-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let redusers = combineReducers({
    blogPage: blogReducer,
    petPage: petReducer,
    userPage: userReducer,
    auth: authReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;