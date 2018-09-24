import { 
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import listReducer from '../reducers';
import {
  originalWatcherSaga,
  updatedWatcherSaga
} from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  listReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(updatedWatcherSaga);
sagaMiddleware.run(originalWatcherSaga);

export default store;
