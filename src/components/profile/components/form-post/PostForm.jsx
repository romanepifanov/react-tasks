import React from 'react';
import style from './PostForm.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/reducers/profile-reducer';

const PostForm = (props) => {
    let addingPost = () => {
        props.dispatch(addPostActionCreator(1));
    }

    let changingPost = (event) => {
        props.dispatch(updateNewPostTextActionCreator(event.currentTarget.value));
    }

    return (
        <form>
            <textarea onChange={changingPost} value={props.content} cols="30" rows="10" />
            <button type="button" onClick={addingPost}>Add</button>
        </form>
    );
}

export default PostForm;