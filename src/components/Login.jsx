import React from 'react';
import {NavLink} from "react-router-dom";

let Login = (props) => {
    return (
        <div className="wrapper">
            {props.auth.isAuth === true ? <NavLink to={`/charity/${props.auth.id}`}>{props.auth.login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    )

}
export default Login;