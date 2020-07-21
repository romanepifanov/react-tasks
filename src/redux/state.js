
const state = {
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
        posts: [
            {likesCount: 4, content: "Hello there!"},
            {likesCount: 2, content: "I am okay, how are you?"},
            {likesCount: 4, content: "I have new car"}
        ]
    },
    dialogsPage: {
        dialogs: [
            { lastMessage: "Hi, how are you?", name: "Roman", id: 1 },
            { lastMessage: "I like it too", name: "Max", id: 2 },
        ],
        messages: [
            { text: "Hello", time: "Jul 21 2020 11:57:45" },
            { text: "How are you?", time: "Jul 21 2020 11:57:45" },
            { text: "Will you go to the cinema", time: "Jul 21 2020 11:57:45" },
        ],
    }
};

export default state;