import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.left_side}>Rakipov Damir</div>
            <div className={styles.right_side}>
                <div className={styles.navigation_list}>
                    <div className={styles.navigation_list_element}><Link to="/todo">ToDo</Link></div>
                    <div className={styles.navigation_list_element}><Link to="/">Главная</Link></div>
                </div>
            </div>
        </header>
    );
};

export default Header;