import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className={style.navbar}>
                {this.props.state.links.map((i, key) => <NavLink key={key} activeClassName={style.active} to={i.to}>{i.title}</NavLink>)}
            </nav>
        );
    }
}

export default Navbar; 