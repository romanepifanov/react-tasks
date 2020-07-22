const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        navbarPage: {
            links: [
                {to: '/profile', title: 'Profile'},
                {to: '/dialogs', title: 'Messages'},
                {to: '/news', title: 'News'},
                {to: '/music', title: 'Music'},
                {to: '/settings', title: 'Settings'},
            ]
        },
        profilePage: {
            postForm: {
              content: ''  
            },
            posts: [
                {id: 1, likesCount: 4, content: "Hello there!"},
                {id: 1, likesCount: 2, content: "I am okay, how are you?"},
                {id: 1, likesCount: 4, content: "I have new car"}
            ]
        },
        dialogsPage: {
            dialogs: [
                { lastMessage: "Hi, how are you?", name: "Roman", id: 1 },
                { lastMessage: "I like it too", name: "Max", id: 2 },
            ],
            messages: [
                { text: "Hello", time: "Jul 21 2020 11:57:45", own: true, },
                { text: "How are you?", time: "Jul 21 2020 11:57:45", own: false, },
                { text: "Will you go to the cinema", time: "Jul 21 2020 11:57:45", own: true, },
            ],
            newMessage: ''
        }
    },
    getState() {
        return this._state;
    },
    _renderTree() { },
    subscribe(observer){
        this._renderTree = observer;
    },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST: {
                let newPost = {
                    id: action.userId,
                    likesCount: 0,
                    content: this._state.profilePage.postForm.content
                };
            
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.postForm.content = '';
                this._renderTree();
            } break;
            case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.postForm.content = action.content;
                this._renderTree();
            } break;
            case SEND_MESSAGE: {
                let newMessage = {
                    own: true,
                    time: (new Date).toString(),
                    text: this._state.dialogsPage.newMessage
                };
            
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessage = '';
                this._renderTree();
            } break;
            case UPDATE_NEW_MESSAGE_TEXT: {
                this._state.dialogsPage.newMessage = action.content;
                this._renderTree();
            } break;
        }
    }
}

export const addPostActionCreator = (userId) => {
    return {
        type: ADD_POST,
        usrId: userId
    }
}

export const updateNewPostTextActionCreator = (content) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        content: content
    }
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

export default store;