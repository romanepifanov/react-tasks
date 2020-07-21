import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const links = [
  {to: '/profile', title: 'Profile'},
  {to: '/dialogs', title: 'Messages'},
  {to: '/news', title: 'News'},
  {to: '/music', title: 'Music'},
  {to: '/settings', title: 'Settings'},
];

const dialogs = [
  { lastMessage: "Hi, how are you?", name: "Roman", id: 1 },
  { lastMessage: "I like it too", name: "Max", id: 2 },
];

const messages = [
  { text: "Hello", time: "Jul 21 2020 11:57:45" },
  { text: "How are you?", time: "Jul 21 2020 11:57:45" },
  { text: "Will you go to the cinema", time: "Jul 21 2020 11:57:45" },
];

const posts = [
  {likesCount: 4, content: "Hello there!"},
  {likesCount: 2, content: "I am okay, how are you?"},
  {likesCount: 4, content: "I have new car"}
];

ReactDOM.render(
  <React.StrictMode>
    <App links={links} dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
