import React from 'react';
import {NavLink} from "react-router-dom";
import TopMenuBlock from '../components/TopMenuBlock';
import userPhoto from '../img/no-avatar.png';
import Preload from '../components/Preload';

let UserPage = (props) => {

    let needCountPage = Math.ceil(props.countUsers / props.pageCountUsers);
    let pages = [];
    for(let i = 1; i <= needCountPage; i++) {
        pages.push(i);
    }

    let userElements = props.state.map((el) =>
       <div className="user-block">
        <div>
           <img src={el.photos.small != null ? el.photos.small : userPhoto} />

            <div className="name-bl">
                <NavLink to={'/charity/' + el.id}>
                    <h2>{el.name}</h2>
                </NavLink>
                {/*<h4>Charity: <span className="red">{el.count}</span></h4>*/}
                {(el.followed) ?
                    <button disabled={props.isFetchProcessing.some(id => id === el.id)} onClick={() => {
                            props.followThunkCreator(el.id)

                        }
                    }
                    >FOLLOW</button> :
                    <button disabled={props.isFetchProcessing.some(id => id === el.id)} onClick={() => {
                            props.unfollowThunkCreator(el.id)
                        }
                    }
                    >UNFOLLOW</button>}
            </div>
        </div>
        <div>
            {/*<p>{el.location.city}</p>*/}
            {/*<p> {el.location.country}</p>*/}
        </div>
       </div>
    )

    return (

        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Charity</h1>
                <div className="paginator">
                    {pages.map((el) =>
                        <span onClick={() => props.onClickPaginator(el)} className={el === props.currentPage ? "curent" : ""}>{el}</span>
                    )}

                </div>
                <div className="users-wrap">
                    {props.isFetch ? <Preload /> : userElements}
                </div>

            </div>
        </div>
    )

}
export default UserPage;