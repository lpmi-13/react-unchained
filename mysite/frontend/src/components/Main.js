// Vendor
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Application
import Home from './Home';
import OriginalAlgoCode from './OriginalAlgoCode';
import OriginalList from './OriginalList';
import Search from './Search';
import store from '../store';
import UpdatedAlgoCode from './UpdatedAlgoCode';
import UpdatedList from './UpdatedList';
import '../styles/custom.css';

const Main = () => (
  <main>
    <Provider store={store}>
      <Switch>
        <Route path='/updated_list' render={() => <UpdatedList extraText={UpdatedAlgoCode} />} />
        <Route path='/original_list' render={() => <OriginalList extraText={OriginalAlgoCode} />} />
        <Route path='/search' component={Search}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Provider>
  </main>
);

export default Main;
