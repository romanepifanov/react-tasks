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
        }
    },
    getState() {
        return this._state;
    },
    renderTree() { },
    addPost(id) {
        let newPost = {
            id: id,
            likesCount: 0,
            content: this._state.profilePage.postForm.content
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.postForm.content = '';
        this.renderTree();
        console.log(this._state.profilePage.postForm.posts);
    },
    changingNewPost(content) {
        this._state.profilePage.postForm.content = content;
        console.log(this._state.profilePage.postForm.content);
        this.renderTree();
    },
    subscribe(observer){
        this.renderTree = observer;
    }
}

export default store;