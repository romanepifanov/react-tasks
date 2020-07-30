import { NavbarState, NavbarLink } from "../states/navbar.state";

const SET_OWNER_ID = "SET-OWNER-ID";

let initialState: NavbarState = {
    links: [
        {
            to: '/profile/OWNER_ID',
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
    ],
}

const navbarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_OWNER_ID:
            const links: Array<NavbarLink> = [];

            state.links.forEach(link => {
                link.to = link.to.replace('OWNER_ID', action.ownerId);
                links.push(link);
            });

            return {
                ...state,
                links: [ ...links ]
            };
        default: return state;
    }
}

export const onSetOwnerId = (ownerId: number) => ({ type: SET_OWNER_ID, ownerId });

export default navbarReducer;