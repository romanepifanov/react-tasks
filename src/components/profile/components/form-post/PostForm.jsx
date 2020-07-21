import React from 'react';
import style from './PostForm.module.css';

const PostForm = (props) => {
    let addingPost = () => {
        props.addPost(1);
    }

    let changingPost = (event) => {
        props.changingNewPost(event.currentTarget.value);
    }

    return (
        <form>
            <textarea onChange={changingPost} value={props.content} cols="30" rows="10" />
            <button onClick={addingPost}>Add</button>
        </form>
    );
}

export default PostForm;