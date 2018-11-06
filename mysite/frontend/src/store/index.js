import { 
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import listReducer from '../reducers';
import {
  originalWatcherSaga,
  updatedWatcherSaga,
  searchWatcherSaga,
} from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(listReducer,
  composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(updatedWatcherSaga);
sagaMiddleware.run(originalWatcherSaga);
sagaMiddleware.run(searchWatcherSaga);

export default store;
