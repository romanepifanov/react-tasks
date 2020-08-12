import React from 'react';
import Login from './Login';

class LoginAPIContainer extends React.Component {

    onSubmit = (formaData) => {
        this.props.login(formaData);
    }

    render() {
        return <Login onSubmit={this.onSubmit} {...this.props} />
    }
}

export default LoginAPIContainer;