import React from "react"
import { Redirect } from 'react-router-dom';

export const AuthComponent = (Component) => {

    return class Wrapper extends React.Component {

        render() {
            if (this.props.authState.isNeedLogin) {
                return <Redirect to={'/login'} />;
            } else {
                return <Component {...this.props} />;
            }
        }
    }
}