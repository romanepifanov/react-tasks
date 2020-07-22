import React from 'react';
import style from './PostForm.module.css';

const PostForm = (props) => {
    return (
        <form>
            <textarea onChange={props.onChangePost} value={props.content} cols="30" rows="10" />
            <button type="button" onClick={props.onAddPost}>Add</button>
        </form>
    );
}

export default PostForm;