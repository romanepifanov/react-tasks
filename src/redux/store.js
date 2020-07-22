import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navbarReducer from "./reducers/navbar-reducer";

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
            dialogForm: {
                newMessage: ''  
            },
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._renderTree();
    }
}

export default store;