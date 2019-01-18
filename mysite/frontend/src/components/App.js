// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { CSSBaseline } from '@material-ui/core';

// Application
import Header from './Header';
import Main from './Main';

const App = () => (
  <div className="container">
    <Header />
    <Main />
  </div>
);

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), wrapper) : null;
