import React from 'react';
import style from './App.module.css';
import Header from './components/header/Header';
import { Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import ProfileContainer from './components/profile/ProfileContainer';

const App = (props) => {
  return (
    <div className={style.app}>
      <Header />

      <main className={style.wrapper}>
        <NavbarContainer store={props.store} />
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </main>
    </div>
  );
}

export default App;
