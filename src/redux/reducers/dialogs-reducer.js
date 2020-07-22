const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                own: true,
                time: (new Date).toString(),
                text: state.dialogForm.newMessage
            };
        
            state.messages.push(newMessage);
            state.dialogForm.newMessage = '';
        } break;
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.dialogForm.newMessage = action.content;
        } break;
    }

    return state;
}


export const updateNewMessageTextActionCreator = (content) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        content: content
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default  dialogsReducer;