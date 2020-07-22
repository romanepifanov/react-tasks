const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [{
            lastMessage: "Hi, how are you?",
            name: "Roman",
            id: 1
        },
        {
            lastMessage: "I like it too",
            name: "Max",
            id: 2
        },
    ],
    messages: [{
            text: "Hello",
            time: "Jul 21 2020 11:57:45",
            own: true,
        },
        {
            text: "How are you?",
            time: "Jul 21 2020 11:57:45",
            own: false,
        },
        {
            text: "Will you go to the cinema",
            time: "Jul 21 2020 11:57:45",
            own: true,
        },
    ],
    dialogForm: {
        newMessage: ''
    }
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                own: true,
                time: (new Date()).toString(),
                text: state.dialogForm.newMessage
            };

            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage
                ],
                dialogForm: {
                    ...state.dialogForm,
                    newMessage: ''
                }
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                dialogForm: {
                    ...state.dialogForm,
                    newMessage: action.content
                }
            };
        default: return state;
    }
}


export const updateNewMessageTextAction = (content) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        content: content
    }
}

export const sendMessageAction = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;