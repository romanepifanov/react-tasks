import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import state, { addPost, changingNewPost, subscribe } from './redux/state';

const renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changingNewPost={changingNewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderTree();
subscribe(renderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
