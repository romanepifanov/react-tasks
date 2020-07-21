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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />

        <main className={style.wrapper}>
          <Navbar links={props.links} />
          <Route path="/profile" render={() => <Profile posts={props.posts}/>} />
          <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
