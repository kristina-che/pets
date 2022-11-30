import React from 'react';
import {connect} from 'react-redux';
import {getLoginThunkCreator} from '../redux/auth-reducer';
import Login from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {

        this.props.getLoginThunkCreator()

        // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((response) => {
        //     if(response.data.resultCode === 0) {
        //         let {id, login, email} = response.data.data;
        //         this.props.setUserDate(id, login, email)
        //     }
        // })

    }
    render() {
        return <Login {...this.props} />
    }
}


let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps,
    {
        getLoginThunkCreator
    })(LoginContainer);