import React from 'react';
import style from './Profile.module.css';
import PostForm from './components/form-post/PostForm';
import Post from './components/post/Post';

const Profile = (props) => {
    return (
        <main className={style.profile}>
            <PostForm />
            
            {props.state.posts.map((i, key) => <Post key={key} likesCount={i.likesCount} content={i.content}/>)}
        </main>
    );
}

export default Profile;