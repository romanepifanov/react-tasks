import React from 'react';
import style from './App.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <div className={style.app}>
      <Header />

      <main className={style.wrapper}>
        <Navbar />
        <Profile />
      </main>
    </div>
  );
}

export default App;
