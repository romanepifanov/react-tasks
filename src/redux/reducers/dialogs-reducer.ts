import { DialogState } from './../states/dialog.state';
import { reset } from 'redux-form';

const SEND_MESSAGE = "SEND-MESSAGE";

let initialState: DialogState = {
    dialogs: [],
    messages: []
}

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                own: true,
                time: new Date(),
                text: action.content
            };

            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage
                ]
            };
        default: return state;
    }
}

const onSendMessage = (content: string) => ({ type: SEND_MESSAGE, content });

export const sendMessage = (content: string) => (dispatch: any) => {
    dispatch(onSendMessage(content));
    dispatch(reset('dialogForm'));
};

export default dialogsReducer;