import React from 'react';
import style from './App.module.css';
import { Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import SearchContainer from './components/search/SearchContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginContainer from './components/login/LoginContainer';

class App extends React.Component {
  componentDidMount() {
    if (this.props.owner === null) {
      this.props.setOwner();
    }
  }

  render() {
    return (
      <div className={style.app}>
        <HeaderContainer />

        <main className={style.wrapper}>
          <NavbarContainer store={this.props.store} />
          {/* <Redirect exact from="/" to="profile/:userId" />
          <Redirect from='*' to='/profile/:userId' /> */}
          <Route path="/profile/:userId" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/search" render={() => <SearchContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </main>
      </div>
    );
  }
}

export default App;
