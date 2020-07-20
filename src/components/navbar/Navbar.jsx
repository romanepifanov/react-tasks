import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Messages
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;