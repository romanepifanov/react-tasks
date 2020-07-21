import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            <div className={style.messageBox}>
                <img className={style.messageLogo} src="" alt=""/>
                <div  className={style.messageContent}>
                    <span className={style.messageText}>{props.text}</span>
                    <span className={style.messageTime}>{props.time}</span>
                </div>
            </div>
        </div>
    );
}

export default Message;