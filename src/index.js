import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { MarauderProvider } from 'marauder';

const config = {
  staleTime: 1000 * 60 * 5,
};

// what does this do?
const loadContext = { user: 'Ryan Florence' };

ReactDOM.render(
  <MarauderProvider config={config} loadContext={loadContext}>
    <App />
  </MarauderProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
