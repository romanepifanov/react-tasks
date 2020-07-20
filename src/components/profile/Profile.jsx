import React from 'react';
import style from './Profile.module.css';
import PostForm from './components/form-post/PostForm';
import Post from './components/post/Post';

const Profile = () => {
    return (
        <main>
            <PostForm />
            <Post />
        </main>
    );
}

export default Profile;