import TopMenuBlock from '../components/TopMenuBlock';
import React from 'react';
import axios from 'axios';
import userPhoto from '../img/no-avatar.png';

let UserPage = (props) => {

    let userElements = props.state.map((el) =>
        <div className="user-block">
            <div>
                <img src={el.photos.small != null ? el.photos.small : userPhoto} />

                <div class="name-bl">
                    <h2>{el.name}</h2>
                    {/*<h4>Charity: <span className="red">{el.count}</span></h4>*/}
                    {(el.followed) ? <button onClick={() => props.followFun(el.id)}>FOLLOW</button> : <button onClick={() => props.unfollowFun(el.id)}>UNFOLLOW</button>}
                </div>
            </div>
            <div>
                {/*<p>{el.location.city}</p>*/}
                {/*<p> {el.location.country}</p>*/}
            </div>
        </div>
    )

    return(
        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Charity</h1>

                <div class="users-wrap">
                    {userElements}
                </div>

            </div>
        </div>
    )
}

export default UserPage;