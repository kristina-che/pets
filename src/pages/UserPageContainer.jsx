import React from 'react';
import {connect} from 'react-redux';
import UserPageClass from './UserPageClass';
import {followActionCreator, unfollowActionCreator, setUserActionCreator, setCurentPageActionCreator, setTotalUsersCountActionCreator} from '../redux/user-reducer';

let mapStateToProps = (state) => {
    return {
        state: state.userPage.userInfo,
        pageSize: state.userPage.pageSize,
        pageCount: state.userPage.pageCount,
        pageCurrent: state.userPage.pageCurrent,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followFun: (status) => {
            dispatch(followActionCreator(status))
        },
        unfollowFun: (status) => {
            dispatch(unfollowActionCreator(status))
        },
        setUser: (users) => {
            dispatch(setUserActionCreator(users))
        },
        setCurentPage: (page) => {
            dispatch(setCurentPageActionCreator(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },


    }
}


const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPageClass);

export default UserPageContainer;