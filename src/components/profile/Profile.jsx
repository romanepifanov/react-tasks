import React from 'react';
import style from './Profile.module.css';
import PostForm from './components/form-post/PostForm';
import Post from './components/post/Post';
import UserProfile from './components/user-profile/UserProfile';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {


    render() {
        if (this.props.authState.isNeedLogin) {
            return <Redirect to={'/login'} />;
        } else {
            return (
                <main className={style.profile}>
                    <UserProfile profile={this.props.profileState.profile} />

                    <PostForm onAddPost={this.props.onAddPost} onChangePost={(event) => this.props.onChangePost(event.target.value)} content={this.props.profileState.postForm.content} />

                    {this.props.profileState.posts.map((i, key) => <Post key={key} likesCount={i.likesCount} content={i.content} />)}
                </main>
            );
        }
    }
}

export default Profile;