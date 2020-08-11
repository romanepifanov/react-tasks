import React from 'react';
import style from './Profile.module.css';
import Post from './components/post/Post';
import UserProfile from './components/user-profile/UserProfile';
import PostFormContainer from './components/form-post/PostForm';

class Profile extends React.Component {

    render() {

        return (
            <main className={style.profile}>
                <UserProfile status={this.props.profileState.status} profile={this.props.profileState.profile} updateProfileStatus={this.props.updateProfileStatus} />

                <PostFormContainer onSubmit={this.props.onSubmit} />

                {this.props.profileState.posts.map((i, key) => <Post key={key} likesCount={i.likesCount} content={i.content} />)}
            </main>
        );
    }
}

export default Profile;