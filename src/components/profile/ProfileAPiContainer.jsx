import React from 'react';
import Profile from './Profile';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }

    componentDidUpdate = (previousProps, previousState) => {
        if (previousProps.match.params.userId !== this.props.match.params.userId) {
            this.props.getProfile(this.props.match.params.userId);
        }
    }

    render() {
        return <Profile {...this.props} />
    }
}

export default ProfileAPIContainer;