import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './components/dialog-item/DialogItem';
import DialogFormContainer from './components/dialog-form/DialogForm';
import Message from './components/message/Message';

class Dialogs extends React.Component {

    render() {
        return (
            <main className={style.dialogs}>
                <div className={style.dialogsWrapper}>
                    {this.props.dialogsState.dialogs.map((i, key) => <DialogItem key={key} lastMessage={i.lastMessage} name={i.name} id={i.id} />)}
                </div>
                <div className={style.dialogField}>
                    <div className={style.dialogBox}>
                        {this.props.dialogsState.messages.map((i, key) => <Message key={key} {...i}/>)}
                    </div>

                    <DialogFormContainer onSubmit={this.props.onSubmit} />
                </div>
            </main>
        );
    }
}

export default Dialogs;