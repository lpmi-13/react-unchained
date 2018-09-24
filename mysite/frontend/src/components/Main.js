// Vendor
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Application
import store from '../store';
import Home from './Home';
import UpdatedList from './UpdatedList';
import OriginalList from './OriginalList';

import '../styles/custom.css';

const Main = () => (
  <main>
    <Provider store={store}>
      <Switch>
        <Route path='/updated_list' component={UpdatedList}/>
        <Route path='/original_list' component={OriginalList}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Provider>
  </main>
);

export default Main;
