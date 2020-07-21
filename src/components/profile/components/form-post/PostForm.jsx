import React from 'react';
import style from './PostForm.module.css';

const PostForm = (props) => {
    let textareaLink = React.createRef();

    let addingPost = () => {
        props.addPost(1, textareaLink.current.value);
    }

    let changingPost = (event) => {
        props.changingNewPost(event.currentTarget.value);
    }

    return (
        <form>
            <textarea onChange={changingPost} ref={textareaLink} value={props.content} cols="30" rows="10" />
            <button onClick={addingPost}>Add</button>
        </form>
    );
}

export default PostForm;