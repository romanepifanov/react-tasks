import React from 'react';
import style from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={style.dialogItem}>
            <img className={style.dialogLogo} alt="" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepng.ru%2Fpng-dhv82w%2F&psig=AOvVaw0nIAhC8lRsdpqiGzB02T1e&ust=1595405638358000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjl5qTz3eoCFQAAAAAdAAAAABAJ" />
            <div className={style.dialogBox}>
                <h5 className={style.dialogUsername}>{props.name}</h5>
                <p className={style.dialogLastMessage}>{props.lastMessage}</p>
            </div>
        </div>
    );
}

export default DialogItem;