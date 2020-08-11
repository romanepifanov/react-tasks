import { DialogState } from './../states/dialog.state';

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

export const sendMessageAction = (content: string) => ({ type: SEND_MESSAGE, content });

export default dialogsReducer;