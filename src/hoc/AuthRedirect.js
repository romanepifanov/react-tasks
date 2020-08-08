import React from "react"
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        authState: state.authState,
    }
}

export const AuthComponent = (Component) => {

    class Wrapper extends React.Component {

        render() {
            if (this.props.authState.isNeedLogin) {
                return <Redirect to={'/login'} />;
            } else {
                return <Component {...this.props} />;
            }
        }
    }

    return connect(mapStateToProps)(Wrapper);
}