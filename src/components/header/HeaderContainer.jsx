import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';
import HeaderAPIContainer from './HeaderAPIContainer';

const mapStateToProps = (state) => {
    return { 
        owner: state.authState.owner,
        isNeedLogin: state.authState.isNeedLogin
    }
}

const mapDispatchToProps = {
    logout
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);

export default HeaderContainer;