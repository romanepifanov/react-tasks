import React from 'react';
import axios from 'axios';
import Profile from './Profile';

class ProfileAPiContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.onLoadProfile();
    }

    onLoadProfile = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.onLoadProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props}/>
    }
}

export default ProfileAPiContainer;