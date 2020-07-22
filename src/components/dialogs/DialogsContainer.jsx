import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageAction, updateNewMessageTextAction } from '../../redux/reducers/dialogs-reducer';

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const onChangeText = (event) => {
        props.store.dispatch(updateNewMessageTextAction(event.target.value));
    }

    const onSendMessage = () => {
        props.store.dispatch(sendMessageAction());
    }

    return (
        <Dialogs onSendMessage={onSendMessage} onChangeText={onChangeText} state={state}/>
    );
}

export default DialogsContainer;