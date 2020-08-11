import React from 'react';
import Login from './Login';
import { loginCall } from '../../api/api-service';

class LoginAPIContainer extends React.Component {

    onSubmit = (formaData) => {
        console.log(formaData);
        loginCall(formaData);
    }

    render() {
        return <Login onSubmit={this.onSubmit}/>
    }
}

export default LoginAPIContainer;