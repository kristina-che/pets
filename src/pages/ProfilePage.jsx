import React from 'react';
import TopMenuBlock from '../components/TopMenuBlock';
import userPhoto from '../img/no-avatar.png';

let ProfilePage = (props) => {
    if(!props.state) {
        return <p>No profile</p>
    }

    let contactsValue = [];
    for(let key in props.state.contacts) {
        contactsValue.push(key, ': ', props.state.contacts[key]);
    }


    return (
        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Profile</h1>
                {/*{props.state.photos.small ? <img src={props.state.photos.small} /> : "no photo" }*/}
                <img className="img-profile" src={props.state.photos.large != null ? props.state.photos.large : userPhoto} />
                    <h3>{props.state.fullName}</h3>
                    <p>{props.state.aboutMe}</p>

                <p><b>Looking job: </b>{props.state.lookingForAJob ? 'YES' : 'NO'}</p>
                <p><b>Description: </b>{props.state.lookingForAJobDescription}</p>
               <div className="users-wrap">
                    <p>{contactsValue}</p>
                </div>

            </div>
        </div>
    )

}
export default ProfilePage;