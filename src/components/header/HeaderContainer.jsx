import { connect } from 'react-redux';
import { onSetOwner, onNeedLogin } from '../../redux/reducers/auth-reducer';
import { onSetOwnerId } from '../../redux/reducers/navbar-reducer';
import HeaderAPIContainer from './HeaderAPIContainer';

const mapStateToProps = (state) => {
    return { 
        owner: state.authState.owner,
        isNeedLogin: state.authState.isNeedLogin
    }
}

const mapDispatchToProps = {
    onSetOwner,
    onNeedLogin,
    onSetOwnerId
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);

export default HeaderContainer;