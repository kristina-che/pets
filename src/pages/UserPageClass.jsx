import TopMenuBlock from '../components/TopMenuBlock';
import React from 'react';
import axios from 'axios';
import userPhoto from '../img/no-avatar.png';

class UserPageClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSize}&count=${this.props.pageCount}`).then((response) => {
            this.props.setUser(response.data.items);
            //this.props.setTotalUsersCount(response.data.totalCount);
        })
    }


    render() {
        let pagesCount = Math.ceil(this.props.pageCount / this.props.pageSize);

        let pages = [];
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let onClickPageCurrent = (el) => {
            this.props.setCurentPage(el);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageCount}`).then((response) => {
                this.props.setUser(response.data.items);
                //this.props.setTotalUsersCount(response.data.totalCount)
               // console.log(response.data.totalCount);
            })
        }

        let userElements = this.props.state.map((el) =>
            <div className="user-block">
                <div>
                    <img src={el.photos.small != null ? el.photos.small : userPhoto} />

                    <div class="name-bl">
                        <h2>{el.name}</h2>
                        {/*<h4>Charity: <span className="red">{el.count}</span></h4>*/}
                        {(el.followed) ? <button onClick={() => this.props.followFun(el.id)}>FOLLOW</button> : <button onClick={() => this.props.unfollowFun(el.id)}>UNFOLLOW</button>}
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
                    {pages.map((el) => <span onClick={() => onClickPageCurrent(el)} className={(this.props.pageCurrent === el) ? 'curent' : ''}>{el}</span>)}
                </div>
                <div class="users-wrap">
                    {userElements}
                </div>

            </div>
        </div>
        )
    }
}
export default UserPageClass;