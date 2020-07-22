import React from 'react';
import style from './App.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />

        <main className={style.wrapper}>
          <Navbar state={props.store.getState().navbarPage} />
          <Route path="/profile" render={() => <Profile state={props.store.getState().profilePage} dispatch={props.store.dispatch}/>} />
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
