import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import UserPage from "./UserPage";
import {getUsersThunkCreator, clickPaginatorThunkCreator, followThunkCreator, unfollowThunkCreator} from '../redux/user-reducer';
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class UserPageAPIClass extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageCountUsers)
    }

    onClickPaginator = (page) => {
        this.props.clickPaginatorThunkCreator(page, this.props.pageCountUsers);
    }

    render() {
        return (
            <UserPage state={this.props.state}
                      countUsers={this.props.countUsers}
                      pageCountUsers={this.props.pageCountUsers}
                      currentPage={this.props.currentPage}
                      onClickPaginator={this.onClickPaginator}
                      isFetch={this.props.isFetch}
                      isFetchProcessing={this.props.isFetchProcessing}
                      followThunkCreator={this.props.followThunkCreator}
                      unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.userPage.userInfo,
        countUsers: state.userPage.countUsers,
        pageCountUsers: state.userPage.pageCountUsers,
        currentPage: state.userPage.currentPage,
        isFetch: state.userPage.isFetch,
        isFetchProcessing: state.userPage.isFetchProcessing,
    }
}


let AuthRedirectComopnent = withAuthRedirect(UserPageAPIClass)

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followFun: (status) => {
//             dispatch(followActionCreator(status))
//         },
//         unfollowFun: (status) => {
//             dispatch(unfollowActionCreator(status))
//         },
//         setUser: (users) => {
//             dispatch(setUserActionCreator(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageActionCreator(page))
//         },
//         preload: (status) => {
//             dispatch(preloadActionCreator(status))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps,
        {
            followThunkCreator,
            unfollowThunkCreator,
            getUsersThunkCreator,
            clickPaginatorThunkCreator
        }),
    withAuthRedirect)(UserPageAPIClass)

//
// const UserPageContainer = connect(mapStateToProps,
//     {
//         followThunkCreator,
//         unfollowThunkCreator,
//         getUsersThunkCreator,
//         clickPaginatorThunkCreator
//     }
//     )(AuthRedirectComopnent);
//
// export default UserPageContainer;