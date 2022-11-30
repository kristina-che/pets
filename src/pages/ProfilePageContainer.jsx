import React from 'react';
import {connect} from 'react-redux';
import {profileThunkCreator} from '../redux/user-reducer';
import ProfilePage from "./ProfilePage";
import withRouter from "../components/withRouter";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.id; //id пользователя через id
        this.props.profileThunkCreator(profileId);
    }
    render() {
        return <ProfilePage {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.userPage.userProfile
    }
}

export default connect(mapStateToProps,
    {
        profileThunkCreator
    })(withRouter(ProfilePageContainer));