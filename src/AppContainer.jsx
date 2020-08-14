import App from './App';
import { connect } from 'react-redux';
import { setOwner } from './redux/reducers/auth-reducer';
import { selectOwner, selectIsNeedLogin } from './redux/selectors/auth-selectors';

const mapStateToProps = (state) => {
  return {
    owner: selectOwner(state),
    isNeedLogin: selectIsNeedLogin(state)
  }
}

const mapDispatchToProps = {
  setOwner
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
