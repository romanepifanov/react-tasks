import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <h3>{props.content}</h3>
            <span>{props.likesCount} likes</span>
        </div>
    );
}

export default Post;