import React from 'react';
import Profile from './Profile';
import { addPostAction, updateNewPostTextAction } from './../../redux/reducers/profile-reducer'

const ProfileContainer = (props) => {
    const state = props.store.getState().profilePage;

    const onAddPost = () => {
        props.store.dispatch(addPostAction(1));
    }

    const onChangePost = (event) => {
        props.store.dispatch(updateNewPostTextAction(event.currentTarget.value));
    }

    return (
        <Profile state={state} onAddPost={onAddPost} onChangePost={onChangePost}/>
    );
}

export default ProfileContainer;