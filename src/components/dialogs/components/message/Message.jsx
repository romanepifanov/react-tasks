import React from 'react';
import style from './Message.module.css';

class Message extends React.Component {

    getTime = () => {
       return  this.props.time.toLocaleTimeString('en-US');
    }

    render() {
        return (
            <div className={this.props.own ? style.messageRight : style.messageLeft}>
                <div className={style.messageBox}>
                    <img className={style.messageLogo} src="" alt="" />
                    <div className={style.messageContent}>
                        <span className={style.messageText}>{this.props.text}</span>
                        <span className={style.messageTime}>{this.getTime()}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;