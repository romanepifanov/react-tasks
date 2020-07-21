import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <NavLink activeClassName={style.active} to="/profile">Profile</NavLink>
            <NavLink activeClassName={style.active} to="/dialogs">Messages</NavLink>
            <NavLink activeClassName={style.active} to="/news">News</NavLink>
            <NavLink activeClassName={style.active} to="/music">Music</NavLink>
            <NavLink activeClassName={style.active} to="/settings">Settings</NavLink>
        </nav>
    );
}

export default Navbar; 