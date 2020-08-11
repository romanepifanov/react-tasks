import { Profile } from './../../models/profile.model';
import { ProfileState } from "../states/profile.state";
import { getProfileCall, updateProfileStatusCall } from '../../api/api-service';

const LOAD_PROFILE = "LOAD-PROFILE";
const ADD_POST = "ADD-POST";
const UPDATE_PROFILE_STATUS = "UPDATE-PROFILE-STATUS";

let initialState: ProfileState = {
    posts: [{
        id: 1,
        likesCount: 4,
        content: "Hello there!"
    },
    {
        id: 1,
        likesCount: 2,
        content: "I am okay, how are you?"
    },
    {
        id: 1,
        likesCount: 4,
        content: "I have new car"
    }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.userId,
                likesCount: 0,
                content: action.content
            };

            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ]
            };
        case LOAD_PROFILE:
            return {
                ...state,
                profile: action.profile,
                status: action.status
            };
        case UPDATE_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            };
        default: return state;
    }
}

//old
export const onAddPost = (userId: number, content: string) => ({ type: ADD_POST, userId, content });
//end old
const onLoadProfile = (profile: Profile, status: string) => ({ type: LOAD_PROFILE, profile, status});
const onUpdateProfileStatus = (status: string) => ({ type: UPDATE_PROFILE_STATUS, status });

export const getProfile = (userId: number) => (dispatch: any) => {
    getProfileCall(userId).then(response => {
        dispatch(onLoadProfile(response.profile, response.status));
    });
}

export const updateProfileStatus = (status: string) => (dispatch: any) => {
    updateProfileStatusCall(status).then(response => {
        if(response) {
            dispatch(onUpdateProfileStatus(status));
        }
    });
}

export default profileReducer;