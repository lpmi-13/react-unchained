import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_ORIGINAL_LIST,
  FETCH_ORIGINAL_LIST_ERROR,
  FETCH_ORIGINAL_LIST_SUCCESS,
  FETCH_UPDATED_LIST,
  FETCH_UPDATED_LIST_ERROR,
  FETCH_UPDATED_LIST_SUCCESS,
} from '../constants';

// watcher saga
export function* originalWatcherSaga() {
  yield takeLatest(FETCH_ORIGINAL_LIST, originalWorkerSaga);
}

export function* updatedWatcherSaga() {
  yield takeLatest(FETCH_UPDATED_LIST, updatedWorkerSaga);
}

function fetchOriginalList() {
  return axios({
    method: 'get',
    url: 'api/old_stats/'
  });
}

function fetchUpdatedList() {
  return axios({
    method: 'get',
    url: 'api/new_stats/'
  });
}

function* originalWorkerSaga() {
  try {
    const response = yield call(fetchOriginalList);
    const users = response.data;

    yield put({ type: FETCH_ORIGINAL_LIST_SUCCESS, users });

  } catch (error) {
    yield put({ type: FETCH_ORIGINAL_LIST_ERROR, error });
  }
}

function* updatedWorkerSaga() {
  try {
    const response = yield call(fetchUpdatedList);
    const users = response.data;

    yield put({ type: FETCH_UPDATED_LIST_SUCCESS, users });

  } catch (error) {
    yield put({ type: FETCH_UPDATED_LIST_ERROR, error });
  }
}
