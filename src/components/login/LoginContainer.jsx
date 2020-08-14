import { connect } from 'react-redux';
import LoginAPIContainer from './LoginAPIContainer';
import { login } from '../../redux/reducers/auth-reducer';
import { selectOwner, selectIsNeedLogin } from '../../redux/selectors/auth-selectors';

const mapStateToProps = (state) => {
    return {
        owner: selectOwner(state),
        isNeedLogin: selectIsNeedLogin(state)
    }
}

const mapDispatchToProps = {
    login
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginAPIContainer);

export default LoginContainer;