import React from 'react';
import style from './Profile.module.css';
import PostForm from './components/form-post/PostForm';
import Post from './components/post/Post';

const Profile = () => {
    return (
        <main className={style.profile}>
            <PostForm />
            <Post message="Hello there"/>
            <Post message="I am okay, how are you?"/>
            <Post message="I have new car"/>
        </main>
    );
}

export default Profile;