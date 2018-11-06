import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_ORIGINAL_LIST,
  FETCH_ORIGINAL_LIST_ERROR,
  FETCH_ORIGINAL_LIST_SUCCESS,
  FETCH_UPDATED_LIST,
  FETCH_UPDATED_LIST_ERROR,
  FETCH_UPDATED_LIST_SUCCESS,
  SEARCH_USERS,
  SEARCH_USERS_ERROR,
  SEARCH_USERS_SUCCESS,
} from '../constants';

const BASE_API_URL = 'api';

// watcher saga
export function* originalWatcherSaga() {
  yield takeLatest(FETCH_ORIGINAL_LIST, originalWorkerSaga);
}

export function* updatedWatcherSaga() {
  yield takeLatest(FETCH_UPDATED_LIST, updatedWorkerSaga);
}

export function* searchWatcherSaga() {
  yield takeLatest(SEARCH_USERS, searchUsersSaga);
} 

function fetchOriginalList() {
  return axios({
    method: 'get',
    url: `${BASE_API_URL}/old_stats/`
  });
}

function fetchUpdatedList() {
  return axios({
    method: 'get',
    url: `${BASE_API_URL}/new_stats/`
  });
}

function searchUsers({ userName }) {
  return axios({
    method: 'get',
    url: `${BASE_API_URL}/search_users/?username=${userName}`
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

function* searchUsersSaga(userName) {
  try {
    const response = yield call(searchUsers, userName);
    const searchResults = response.data;

    yield put({ type: SEARCH_USERS_SUCCESS, searchResults });

  } catch (error) {
    yield put({ type: SEARCH_USERS_ERROR, error });
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
