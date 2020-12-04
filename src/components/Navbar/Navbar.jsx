import React from 'react';

import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avatar.jpg'
import styles from './navbar.module.scss';


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={Logo} className={styles.navbar__logo} />
            <div className={styles.navbar__profile}>
                <span className={styles.navbar__label}>Created by <span>Mardari Vladislav</span></span>
                <div className={styles.navbar__avatar}>
                    <img src={Avatar} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
