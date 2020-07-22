const LOAD_MORE = 'LOAD MORE';
const SWITCH_FOLLOW = 'SWITCH-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Roman', status: 'Hi', location: { city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Max', status: 'Hi', location: { city: 'Minsk', country: 'Belarus'}}
    ],
    needMore: false,
    haveMore: true
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: 
            return {
                ...state,
                users: [
                    state.users,
                    ...action.users
                ]
            };
        case SWITCH_FOLLOW: 
            let changedUser = state.users.find((u) => u.id === action.id);
            changedUser.followed =  !changedUser.followed;
            return {
                ...state,
                users: [
                    ...state.users
                ]
            };
        case LOAD_MORE: 
            if(state.haveMore) {
                // load more items
            }

            return {
                ...state
            };
        default: return state;
    }
}

export const switchFollowAction = (userId) => {
    return {
        type: SWITCH_FOLLOW,
        id: userId
    }
}

export const loadModeAction = () => {
    return {
        type: LOAD_MORE
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default searchReducer;