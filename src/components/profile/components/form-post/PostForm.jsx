import React from 'react';
import style from './PostForm.module.css';

const PostForm = (props) => {
    let addingPost = () => {
        props.dispatch({type: 'ADD-POST', id: 1});
    }

    let changingPost = (event) => {
        props.dispatch({type: 'WRITING-NEW-POST', content: event.currentTarget.value});
    }

    return (
        <form>
            <textarea onChange={changingPost} value={props.content} cols="30" rows="10" />
            <button type="button" onClick={addingPost}>Add</button>
        </form>
    );
}

export default PostForm;