import { connect } from 'react-redux';
import { setOwner } from '../../redux/reducers/auth-reducer';
import HeaderAPIContainer from './HeaderAPIContainer';

const mapStateToProps = (state) => {
    return { 
        owner: state.authState.owner,
        isNeedLogin: state.authState.isNeedLogin
    }
}

const mapDispatchToProps = {
    setOwner
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);

export default HeaderContainer;