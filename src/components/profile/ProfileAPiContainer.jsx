import React from 'react';
import axios from 'axios';
import Profile from './Profile';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(response => {
                this.props.onLoadProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} />
    }
}

export default ProfileAPIContainer;