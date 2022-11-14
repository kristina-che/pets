import {combineReducers, legacy_createStore as createStore} from "redux";
import {blogReducer} from './blog-reducer';
import {petReducer} from './pet-reducer';
import {userReducer} from './user-reducer';

let redusers = combineReducers({
    blogPage: blogReducer,
    petPage: petReducer,
    userPage: userReducer
})

let store = createStore(redusers);

export default store;