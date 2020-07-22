import React from 'react';
import style from './User.module.css';

const User = (props) => {
    const buttonClasses = `${style.userFollow} ${props.user.followed ? style.userFollowActive : '' }`;

    return (
        <div className={style.user}>
            <div className={style.userActions}>
                <img className={style.userLogo} src="" alt="" />
                <button
                    className={ buttonClasses }
                    onClick={() => props.onChangeFollow(props.user.id) }>
                    { props.user.followed ? 'Follow' : 'Unfollow' }
                </button>
            </div>

            <div className={style.userInformation}>
                <h4 className={style.userName}>{props.user.fullName}</h4>
                <span className={style.userLocation}>{props.user.location.country}, {props.user.location.city}</span>
                <p className={style.userStatus}>{props.user.status}</p>
            </div>
        </div>
    );
}

export default User;