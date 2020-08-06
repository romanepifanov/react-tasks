import { connect } from 'react-redux';
import LoginAPIContainer from './LoginAPIContainer';

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = {
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginAPIContainer);

export default LoginContainer;