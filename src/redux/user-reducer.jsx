const FOLLOWUSER = 'FOLLOW';
const UNFOLLOWUSER = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


let initialState = {
    userInfo: [],
    pageSize: 2,
    pageCount: 50,
    pageCurrent: 1,

}

export const followActionCreator = (status) => ({type: FOLLOWUSER, status: status});
export const unfollowActionCreator = (status) => ({type: UNFOLLOWUSER, status: status});
export const setUserActionCreator = (users) => ({type: SET_USERS, users: users});
export const setCurentPageActionCreator = (page) => ({type: SET_CURENT_PAGE, page: page});
export const setTotalUsersCountActionCreator = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});


export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOWUSER  : {

            let copyState = {
                ...state,
                userInfo: state.userInfo.map(el => {
                   if(action.status === el.id) {
                       console.log(action.status);
                     return {...el, follow: false}
                   } else {
                      return el
                   }
               })
            }
            return copyState
        }
        case UNFOLLOWUSER : {
            let copyState = {
                ...state,
                userInfo: state.userInfo.map(el => {
                    if(action.status === el.id) {
                        return {...el, follow: true}
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
            return { ...state, pageCurrent: action.page}
        }
        case SET_TOTAL_COUNT: {
            return { ...state, pageCount: action.totalCount}
        }

        default: return state
    }

}