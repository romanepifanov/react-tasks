import { connect } from 'react-redux';
import { setOwner, logout } from '../../redux/reducers/auth-reducer';
import HeaderAPIContainer from './HeaderAPIContainer';

const mapStateToProps = (state) => {
    return { 
        owner: state.authState.owner,
        isNeedLogin: state.authState.isNeedLogin
    }
}

const mapDispatchToProps = {
    setOwner,
    logout
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);

export default HeaderContainer;