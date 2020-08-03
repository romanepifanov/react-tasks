import React from 'react';
import Profile from './Profile';
import { getProfileCall } from '../../api/api-service';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

export default ProfileAPIContainer;