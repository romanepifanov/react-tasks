import React from 'react';
import style from './Profile.module.css';
import PostForm from './components/form-post/PostForm';
import Post from './components/post/Post';
import UserProfile from './components/user-profile/UserProfile';

const Profile = (props) => {
    return (
        <main className={style.profile}>
            <UserProfile profile={props.state.profile} />

            <PostForm onAddPost={props.onAddPost} onChangePost={(event) => props.onChangePost(event.target.value)} content={props.state.postForm.content}/>
            
            {props.state.posts.map((i, key) => <Post key={key} likesCount={i.likesCount} content={i.content}/>)}
        </main>
    );
}

export default Profile;