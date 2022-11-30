import {authApi} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const setUserDateActionCreator = (id, login, email) => ({type: SET_USER_DATA, auth: {id, login, email}});

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.auth,
                isAuth: true
            }
        default:
            return state
    }
}

export const getLoginThunkCreator = () => {
    return (dispatch) => {
        authApi.getLogin().then((data) => {

            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserDateActionCreator(id, login, email));
            }
        })
    }
}

