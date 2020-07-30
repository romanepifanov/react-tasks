import React from 'react';
import style from './User.module.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const buttonClasses = `${style.userFollow} ${props.user.followed ? style.userFollowActive : '' }`;

    return (
        <div className={style.user}>
            <div className={style.userActions}>
                <NavLink to={'profile/' + props.user.id}>
                    <Avatar size="large" src={props.user?.photos?.small} icon={<UserOutlined />} />
                </NavLink>
                <button
                    className={ buttonClasses }
                    onClick={() => props.onChangeFollow(props.user.id) }>
                    { props.user.followed ? 'Follow' : 'Unfollow' }
                </button>
            </div>

            <div className={style.userInformation}>
                <h4 className={style.userName}>{props.user.name}</h4>
                <p className={style.userStatus}>{props.user.status}</p>
            </div>
        </div>
    );
}

export default User;