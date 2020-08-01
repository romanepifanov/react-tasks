import React from 'react';
import Profile from './Profile';
import { getProfileCall } from '../../api/api-service';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        getProfileCall().then(response => {
                this.props.onLoadProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} />
    }
}

export default ProfileAPIContainer;