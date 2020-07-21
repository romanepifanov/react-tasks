import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {to: '/profile', title: 'Profile'},
        {to: '/dialogs', title: 'Messages'},
        {to: '/news', title: 'News'},
        {to: '/music', title: 'Music'},
        {to: '/settings', title: 'Settings'},
    ];

    return (
        <nav className={style.navbar}>
            {links.map((i, key) => <NavLink key={key} activeClassName={style.active} to={i.to}>{i.title}</NavLink>)}
        </nav>
    );
}

export default Navbar; 