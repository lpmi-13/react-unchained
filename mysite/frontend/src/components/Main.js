// Vendor
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Application
import OriginalList from './OriginalList';
import Search from './Search';
import store from '../store';
import UpdatedList from './UpdatedList';
import '../styles/custom.scss';

const Main = () => (
  <main>
    <Provider store={store}>
      <Switch>
        <Route path='/original_list' component={OriginalList}/>
        <Route path='/search' component={Search}/>
        <Route exact path='/' component={UpdatedList}/>
      </Switch>
    </Provider>
  </main>
);

export default Main;
