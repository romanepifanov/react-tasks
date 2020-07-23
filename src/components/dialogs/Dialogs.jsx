import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './components/dialog-item/DialogItem';
import Message from './components/message/Message';
import {Form, Input, Button} from 'antd';

const Dialogs = (props) => {
    return (
        <main className={style.dialogs}>
            <div className={style.dialogsWrapper}>
                {props.state.dialogs.map((i, key) => <DialogItem key={key} lastMessage={i.lastMessage} name={i.name} id={i.id} />)}
            </div>
            <div className={style.dialogField}>
                <div className={style.dialogBox}>
                    {props.state.messages.map((i, key) => <Message key={key} text={i.text} time={i.time} own={i.own} />)}
                </div>

                <Form className={style.dialogsForm} name="new-message-form" onFinish={props.onSendMessage}>
                    <Form.Item>
                        <Input.TextArea onChange={props.onChangeText} value={props.state.dialogForm.newMessage}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </main>
    );
}

export default Dialogs;