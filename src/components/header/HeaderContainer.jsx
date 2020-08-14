import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';
import HeaderAPIContainer from './HeaderAPIContainer';
import { selectIsNeedLogin, selectOwner } from '../../redux/selectors/auth-selectors';

const mapStateToProps = (state) => {
    return { 
        owner: selectOwner(state),
        isNeedLogin: selectIsNeedLogin(state)
    }
}

const mapDispatchToProps = {
    logout
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);

export default HeaderContainer;