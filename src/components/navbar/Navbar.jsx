import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            {props.links.map((i, key) => <NavLink key={key} activeClassName={style.active} to={i.to}>{i.title}</NavLink>)}
        </nav>
    );
}

export default Navbar; 