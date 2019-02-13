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

const initialState = {
    originalAlreadyFetched: false,
    originalError: null,
    originalFetching: false,
    originalUsers: [],
    searchError: null,
    searchResults: {
      Rank_Total_Commits_Users: [],
      Rank_Unique_Commits_Users: [],
    },
    searchingUsers: false,
    updatedAlreadyFetched: false,
    updatedError: null,
    updatedFetching: false,
    updatedUsers: [],
};

const listReducer = (state = initialState, payload) => {
  switch (payload.type) {

    case FETCH_ORIGINAL_LIST:
      return {
        ...state,
        originalFetching: true
      };

    case FETCH_ORIGINAL_LIST_ERROR:
      return { 
        ...state,
        originalError: payload.error,
        originalFetching: false,
      };

    case FETCH_ORIGINAL_LIST_SUCCESS:
      return {
        ...state,
        originalAlreadyFetched: true,
        originalError: null,
        originalFetching: false,
        originalUsers: payload.users,
      };

    case FETCH_UPDATED_LIST:
      return {
        ...state,
        updatedFetching: true,
      };

    case FETCH_UPDATED_LIST_ERROR:
      return { 
        ...state,
        updatedError: payload.error,
        updatedFetching: false,
      };

    case FETCH_UPDATED_LIST_SUCCESS:
      return {
        ...state,
        updatedAlreadyFetched: true,
        updatedError: null,
        updatedFetching: false,
        updatedUsers: payload.users,
      };

    case SEARCH_USERS:
      return {
        ...state,
        searchError: null,
        searchResults: [],
        searchingUsers: true,
      };

    case SEARCH_USERS_ERROR:
      return {
        ...state,
        searchError: payload.error,
        searchResults: [],
        searchingUsers: false,
      };

    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        searchError: null,
        searchResults: payload.searchResults,
        searchingUsers: false,
      };

    default:
      return state;
  }
};


export default listReducer;
