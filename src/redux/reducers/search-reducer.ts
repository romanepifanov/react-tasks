import { User } from './../../models/user.model';
import { SearchState } from "../states/search.state";

const LOAD_MORE = 'LOAD MORE';
const SWITCH_FOLLOW = 'SWITCH-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState: SearchState = {
    users: [],
    needMore: false,
    haveMore: true
}

const searchReducer = (state = initialState, action: any) => {
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

            if(changedUser) {
                changedUser.followed =  !changedUser.followed;
            }

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

export const switchFollowAction = (userId: number) => {
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

export const setUsersAction = (users: Array<User>) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default searchReducer;