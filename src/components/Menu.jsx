import styles from '../style/Menu.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? styles.act : styles.link;


const Menu = () => {
    return(
        <div className="topMenu">
            <NavLink to="/" end className={setActive}>Home</NavLink>
            <NavLink to="/pets" className={setActive}>Our pets</NavLink>
            <NavLink to="/charity" className={setActive}>Charity</NavLink>
            <NavLink to="/blog" className={setActive}>Blog</NavLink>
        </div>
    )
}

export default Menu;