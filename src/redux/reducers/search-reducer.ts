import { User } from './../../models/user.model';
import { SearchState } from "../states/search.state";

const SWITCH_FOLLOW = 'SWITCH-FOLLOW';
const LOAD_USERS = 'LOAD-USERS';

let initialState: SearchState = {
    users: [],
    haveMore: true
}

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ],
                haveMore: (state.users.length + action.users.length) < action.totalCount
            };
        case SWITCH_FOLLOW:
            let changedUser = state.users.find((u) => u.id === action.id);

            if (changedUser) {
                changedUser.followed = !changedUser.followed;
            }

            return {
                ...state,
                users: [
                    ...state.users
                ]
            };
        default: return state;
    }
}

export const onChangeFollow = (userId: number) => ({ type: SWITCH_FOLLOW, id: userId });
export const onLoadMore = (users: Array<User>, totalCount: number) => ({ type: LOAD_USERS, users: users, totalCount: totalCount });

export default searchReducer;