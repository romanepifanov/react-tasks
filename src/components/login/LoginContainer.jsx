import { connect } from 'react-redux';
import LoginAPIContainer from './LoginAPIContainer';
import { login } from '../../redux/reducers/auth-reducer';

const mapStateToProps = (state) => {
    return {
        owner: state.authState.owner,
        isNeedLogin: state.authState.isNeedLogin
    }
}

const mapDispatchToProps = {
    login
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginAPIContainer);

export default LoginContainer;