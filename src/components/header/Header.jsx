import React from 'react';
import style from './Header.module.css';
import { Button } from 'antd';

class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <Button onClick={this.props.eventHandler}> {this.props.owner != null ? 'logout' : 'login'}</Button>
            </header>
        );
    }

}

export default Header;