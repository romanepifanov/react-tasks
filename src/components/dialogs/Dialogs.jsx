import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './components/dialog-item/DialogItem';
import Message from './components/message/Message';

const Dialogs = () => {
    const dialogs = [
        { lastMessage: "Hi, how are you?", name: "Roman", id: 1 },
        { lastMessage: "I like it too", name: "Max", id: 2 },
    ];

    const messages = [
        { text: "Hello", time: "Jul 21 2020 11:57:45" },
        { text: "How are you?", time: "Jul 21 2020 11:57:45" },
        { text: "Will you go to the cinema", time: "Jul 21 2020 11:57:45" },
    ];

    return (
        <main className={style.dialogs}>
            <div className={style.dialogsWrapper}>
                {dialogs.map((i, key) => <DialogItem key={key} lastMessage={i.lastMessage} name={i.name} id={i.id} />)}
            </div>
            <div className={style.dialogField}>
                <div className={style.dialogBox}>
                    {messages.map((i, key) => <Message key={key} text={i.text} time={i.time} />)}
                </div>

                <form action="">
                    form
                </form>
            </div>
        </main>
    );
}

export default Dialogs;