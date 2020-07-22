let initialState = {
    links: [
        {
            to: '/profile',
            title: 'Profile'
        },
        {
            to: '/dialogs',
            title: 'Messages'
        },
        {
            to: '/news',
            title: 'News'
        },
        {
            to: '/music',
            title: 'Music'
        },
        {
            to: '/settings',
            title: 'Settings'
        },
        {
            to: '/search',
            title: 'Search users'
        }
    ]
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;