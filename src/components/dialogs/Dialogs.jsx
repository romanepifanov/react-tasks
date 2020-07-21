import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './components/dialog-item/DialogItem';
import Message from './components/message/Message';

const Dialogs = () => {
    return (
        <main className={style.dialogs}>
            <div className={style.dialogsWrapper}>
                <DialogItem lastMessage="Hi, how are you?" name="Roman" />
                <DialogItem lastMessage="I like it too" name="Max" />
            </div>
            <div className={style.dialogField}>
                <div className={style.dialogBox}>
                    <Message text="Hello" time="Jul 21 2020 11:57:45" />
                    <Message text="How are you?" time="Jul 21 2020 11:57:45" />
                    <Message text="Will you go to the cinema" time="Jul 21 2020 11:57:45" />
                </div>
                
                <form action="">
                    form
                </form>
            </div>
        </main>
    );
}

export default Dialogs;