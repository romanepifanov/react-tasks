import App from './App';
import { connect } from 'react-redux';
import { setOwner } from './redux/reducers/auth-reducer';

const mapStateToProps = (state) => {
  return {
    owner: state.authState.owner,
    isNeedLogin: state.authState.isNeedLogin
  }
}

const mapDispatchToProps = {
  setOwner
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
