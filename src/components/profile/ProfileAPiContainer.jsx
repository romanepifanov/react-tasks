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

    onSubmit = (formaData) => {
        this.props.onAddPost(this.props.match.params.userId, formaData.content);
        console.log(formaData);
    }

    render() {
        return <Profile {...this.props} onSubmit={this.onSubmit} />
    }
}

export default ProfileAPIContainer;