import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarContainer = (props) => {
    const state = props.store.getState().navbarPage;
    return (
        <Navbar state={state}/>
    );
}

export default NavbarContainer; 