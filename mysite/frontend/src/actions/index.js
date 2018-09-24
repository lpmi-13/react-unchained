import {
  FETCH_ORIGINAL_LIST,
  FETCH_ORIGINAL_LIST_ERROR,
  FETCH_ORIGINAL_LIST_SUCCESS,
  FETCH_UPDATED_LIST,
  FETCH_UPDATED_LIST_ERROR,
  FETCH_UPDATED_LIST_SUCCESS,
  GET_ORIGINAL_LIST,
  GET_UPDATED_LIST,
}  from '../constants';

export function fetchOriginalList() {
  return {
    type: FETCH_ORIGINAL_LIST
  };
};

export function fetchOriginalListError({ error }) {
  return {
    type: FETCH_ORIGINAL_LIST_ERROR,
    error,
  };
};

export function fetchOriginalListSuccess({ userList }) {
  return {
    type: FETCH_ORIGINAL_LIST_SUCCESS,
    userList,
  };
};

export function fetchUpdatedList() {
  return {
    type: FETCH_UPDATED_LIST,
  };
};

export function fetchUpdatedListError({ error }) {
  return {
    type: FETCH_UPDATED_LIST_ERROR,
    error,
  };
};

export function fetchUpdatedListSuccess({ userList }) {
  return {
    type: FETCH_UPDATED_LIST_SUCCESS,
    userList,
  }
};
