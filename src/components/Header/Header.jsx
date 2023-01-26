import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {

    return(
        <div className={styles.container}>
            <ul className={styles.nav__list}>
                <li><NavLink to="/"> Home </NavLink></li>
                <li><NavLink to="/People?page=1"> People </NavLink></li>
                <li><NavLink to="/not-found"> Not Found </NavLink></li>
            </ul>
            
            
        </div>
    )
} 



export default Header;