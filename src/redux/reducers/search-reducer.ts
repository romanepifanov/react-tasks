import { User } from './../../models/user.model';
import { SearchState } from "../states/search.state";
import { getUsersCall, deleteFollowCall, addFollowCall } from '../../api/users-service';

const SWITCH_FOLLOW = 'SWITCH-FOLLOW';
const LOAD_USERS = 'LOAD-USERS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING IN PROGRESS';

let initialState: SearchState = {
    users: [],
    haveMore: true,
    followingInProgress: []
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
        case FOLLOWING_IN_PROGRESS:
            let ids = [...state.followingInProgress];

            if(ids.indexOf(action.userId) < 0) {
                ids.push(action.userId)
            } else {
                ids = ids.filter((id: number) => action.userId !== id);
            }

            return {
                ...state,
                followingInProgress: [...ids]
            };
        default: return state;
    }
}

const onChangeFollow = (userId: number) => ({ type: SWITCH_FOLLOW, id: userId });
const onLoadMore = (users: Array<User>, totalCount: number) => ({ type: LOAD_USERS, users: users, totalCount: totalCount });
const onFollowingInProgress = (userId: number) => ({ type: FOLLOWING_IN_PROGRESS, userId });

export const getUsers = (page: number) => (dispatch: any) => {
    getUsersCall(page).then((data) => dispatch(onLoadMore(data.items, data.totalCount)));
}

export const deleteFollow = (userId: number) => (dispatch: any) => {
    dispatch(onFollowingInProgress(userId));

    deleteFollowCall(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(onChangeFollow(userId));
            dispatch(onFollowingInProgress(userId));
        }
    });
}

export const addFollow = (userId: number) => (dispatch: any) => {
    dispatch(onFollowingInProgress(userId));

    addFollowCall(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(onChangeFollow(userId));
            dispatch(onFollowingInProgress(userId));
        }
    });
}

export default searchReducer;