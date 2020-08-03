import { Profile } from './../../models/profile.model';
import { ProfileState } from "../states/profile.state";
import { getProfileCall } from '../../api/api-service';

const LOAD_PROFILE = "LOAD-PROFILE";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState: ProfileState = {
    postForm: {
        content: ''
    },
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
    profile: null
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.userId,
                likesCount: 0,
                content: state.postForm.content
            };

            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ],
                postForm: {
                    ...state.postForm,
                    content: ''
                }
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postForm: {
                    ...state.postForm,
                    content: action.content
                }
            };
        case LOAD_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default: return state;
    }
}

const onLoadProfile = (profile: Profile) => ({ type: LOAD_PROFILE, profile: profile });
export const onAddPost = (userId: number) => ({ type: ADD_POST, usrId: userId });
export const onChangePost = (content: string) => ({ type: UPDATE_NEW_POST_TEXT, content: content });

export const getProfile = (userId: number) => (dispatch: any) => {
    getProfileCall(userId).then(response => {
        dispatch(onLoadProfile(response));
    });
}

export default profileReducer;