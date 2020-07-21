import React from 'react';
import style from './Profile.module.css';
import PostForm from './components/form-post/PostForm';
import Post from './components/post/Post';

const Profile = () => {
    const posts = [
        {likesCount: 4, content: "Hello there!"},
        {likesCount: 2, content: "I am okay, how are you?"},
        {likesCount: 4, content: "I have new car"}
    ];

    return (
        <main className={style.profile}>
            <PostForm />
            
            {posts.map((i, key) => <Post key={key} likesCount={i.likesCount} content={i.content}/>)}
        </main>
    );
}

export default Profile;