import {profileApi} from "../api/api";

const FOLLOWUSER = 'FOLLOW';
const UNFOLLOWUSER = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';
const PRELOAD = 'PRELOAD';
const SET_PROFILE = 'SET_PROFILE';
const SET_FETCH_PROCESSINIG= 'SET_FETCH_PROCESSINIG';

let initialState = {
    userInfo: [],
    userProfile: null,
    countUsers: 50, //общее колличество прибывших itmes c сервера
    pageCountUsers: 10, //колличество желаймых items на странице
    currentPage: 1,
    isFetch: false,
    isFetchProcessing: [],

}

// ------- ActionCreators ------->

export const followActionCreator = (status) => ({type: FOLLOWUSER, status: status});
export const unfollowActionCreator = (status) => ({type: UNFOLLOWUSER, status: status});
export const setUserActionCreator = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageActionCreator = (page) => ({type: SET_CURENT_PAGE, page: page});
export const preloadActionCreator = (status) => ({type: PRELOAD, status: status});
export const setProfileActionCreator = (profile) => ({type: SET_PROFILE, profile: profile});
export const setFetchProcessingActionCreator = (isFetchStatus, userId) => ({type: SET_FETCH_PROCESSINIG, isFetchStatus: isFetchStatus, userId});

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case UNFOLLOWUSER  : {
            let copyState = {
                ...state,
                userInfo: state.userInfo.map(el => {
                   if(action.status === el.id) {
                     return {...el, followed: false}
                   } else {
                      return el
                   }
               })
            }
            return copyState
        }
        case FOLLOWUSER : {
            let copyState = {
                ...state,
                userInfo: state.userInfo.map(el => {
                    if(action.status === el.id) {
                        return {...el, followed: true}
                    } else {
                        return el
                    }
                })
            }
            return copyState
        }
        case SET_USERS: {
            return { ...state, userInfo: action.users}
        }
        case SET_CURENT_PAGE: {
            return { ...state, currentPage: action.page}
        }
        case PRELOAD: {
            return { ...state, isFetch: action.status}
        }
        case SET_PROFILE: {
            return { ...state, userProfile: action.profile}
        }
        case SET_FETCH_PROCESSINIG: {
            return { ...state,
                isFetchProcessing: action.isFetchStatus ?
                        [...state.isFetchProcessing, action.userId]
                    : state.isFetchProcessing.filter(id => id !== action.userId)

            }
        }
        default: return state
    }
}

// ------- Thunks ------->

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(preloadActionCreator(true));
        userApi.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUserActionCreator(data.items));
            dispatch(preloadActionCreator(false));
        })
    }
}

export const clickPaginatorThunkCreator = (page, pageCountUsers) => {
    return (dispatch) => {
        dispatch(preloadActionCreator(true));
        dispatch(setCurrentPageActionCreator(page));
        userApi.getPaginator(page, pageCountUsers).then((data) => {
            dispatch(setUserActionCreator(data.items));
            dispatch(preloadActionCreator(false));
        })
    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFetchProcessingActionCreator(true, id));
        userApi.deleteFollow(id).then((data) => {
            if(data.resultCode === 0) {
                dispatch(unfollowActionCreator(id))
            }
            dispatch(setFetchProcessingActionCreator(false, id))
        })
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFetchProcessingActionCreator(true, id));

        userApi.postFollow(id).then((data) => {
            if(data.resultCode === 0) {
                dispatch(followActionCreator(id))
            }
            dispatch(setFetchProcessingActionCreator(false, id))
        })
    }
}


export const profileThunkCreator = (profileId) => {
    return (dispatch) => {
        profileApi.getProfile(profileId).then((data) => {
            dispatch(setProfileActionCreator(data))

        })
    }
}

