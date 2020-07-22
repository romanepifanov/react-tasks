import React from 'react';
import style from './Profile.module.css';
import PostForm from './components/form-post/PostForm';
import Post from './components/post/Post';

const Profile = (props) => {
    return (
        <main className={style.profile}>
            <PostForm onAddPost={props.onAddPost} onChangePost={props.onChangePost} content={props.state.postForm.content}/>
            
            {props.state.posts.map((i, key) => <Post key={key} likesCount={i.likesCount} content={i.content}/>)}
        </main>
    );
}

export default Profile;