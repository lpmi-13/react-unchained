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
}  from '../constants';

export function fetchOriginalList() {
  return {
    type: FETCH_ORIGINAL_LIST
  };
}

export function fetchOriginalListError({ error }) {
  return {
    type: FETCH_ORIGINAL_LIST_ERROR,
    error,
  };
}

export function fetchOriginalListSuccess({ userList }) {
  return {
    type: FETCH_ORIGINAL_LIST_SUCCESS,
    userList,
  };
}

export function fetchUpdatedList() {
  return {
    type: FETCH_UPDATED_LIST,
  };
}

export function fetchUpdatedListError({ error }) {
  return {
    type: FETCH_UPDATED_LIST_ERROR,
    error,
  };
}

export function fetchUpdatedListSuccess({ userList }) {
  return {
    type: FETCH_UPDATED_LIST_SUCCESS,
    userList,
  }
}

export function searchUsers({ userName }) {
  return {
    type: SEARCH_USERS,
    userName,
  }
}

export function searchUsersError({ error }) {
  return {
    type: SEARCH_USERS_ERROR,
    error,
  }
}

export function searchUsersSuccess({ searchResult }) {
  return {
    type: SEARCH_USERS_SUCCESS,
    searchResult,
  }
}
