import listReducer from './listReducer';
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
  searchResults: [],
  searchingUsers: false,
  updatedAlreadyFetched: false,
  updatedError: null,
  updatedFetching: false,
  updatedUsers: [],
};

describe('listReducer', () => {
    it('should return the default state appropriately', () => {
      expect(listReducer(initialState, {})).to.equal(initialState);
    });

    it('should handle FETCH_ORIGINAL_LIST', () => {
      const fetchAction = {
        type: FETCH_ORIGINAL_LIST,
      };
      const updatedState = {...initialState, originalFetching: true}
      expect(listReducer(initialState, fetchAction)).to.deep.equal(updatedState);
    });

    it('should handle FETCH_ORIGINAL_LIST_ERROR', () => {
      const originalError = new Error('dis is horrifying!');
      const fetchErrorAction = {
        type: FETCH_ORIGINAL_LIST_ERROR,
        error: originalError,
      };
      const updatedState = {
        ...initialState,
        originalFetching: false,
        originalError: originalError
      };
      expect(listReducer(initialState, fetchErrorAction)).to.deep.equal(updatedState);
    });

    it('should handle FETCH_ORIGINAL_LIST_SUCCESS', () => {
      const originalUsers = [
        {
          rank: 23,
          contributions: 888,
          login: 'booyah',
        },
      ];
      const fetchSuccessAction = {
        type: FETCH_ORIGINAL_LIST_SUCCESS,
        users: originalUsers,
      };
      const updatedState = {
        ...initialState,
        originalAlreadyFetched: true,
        originalFetching: false,
        originalUsers,
      };
      expect(listReducer(initialState, fetchSuccessAction)).to.deep.equal(updatedState);
    });

    it('should handle FETCH_UPDATED_LIST', () => {
      const fetchUpdatedListAction = {
          type: FETCH_UPDATED_LIST,
      };
      const updatedState = {
          ...initialState,
          updatedFetching: true,
      };
      expect(listReducer(initialState, fetchUpdatedListAction)).to.deep.equal(updatedState);
    });

    it('should handle FETCH_UPDATED_LIST_ERROR', () => {
      const error = new Error('kablamow!');
      const fetchUpdatedListErrorAction = {
          type: FETCH_UPDATED_LIST_ERROR,
          error,
      };
      const updatedState = {
          ...initialState,
          updatedError: error,
      };
      expect(listReducer(initialState, fetchUpdatedListErrorAction)).to.deep.equal(updatedState);
    });

    it('should handle FETCH_UPDATED_LIST_SUCCESS', () => {
      const users = [
        {
          rank: 45,
          contributions: 888,
          login: 'booyah',
        },
      ];
        const fetchUpdatedListSuccessAction = {
          type: FETCH_UPDATED_LIST_SUCCESS,
          users,
      };
      const updatedState = {
          ...initialState,
          updatedAlreadyFetched: true,
          updatedUsers: users,
      };
      expect(listReducer(initialState, fetchUpdatedListSuccessAction)).to.deep.equal(updatedState);
    });

    it('should handle SEARCH_USERS', () => {
      const searchUsersAction = {
        type: SEARCH_USERS
      };
      const updatedState = {
          ...initialState,
          searchingUsers: true,
      }
      expect(listReducer(initialState, searchUsersAction)).to.deep.equal(updatedState);
    });

    it('should handle SEARCH_USERS_ERROR', () => {
      const error = new Error('failed to get users, please try again');
      const searchUsersErrorAction = {
        type: SEARCH_USERS_ERROR,
        error,
      };
      const updatedState = {
          ...initialState,
          searchError: error,
      }
      expect(listReducer(initialState, searchUsersErrorAction)).to.deep.equal(updatedState);
    });

    it('should handle SEARCH_USERS_SUCCESS', () => {
      const searchResults = [
        {
          rank: 45,
          contributions: 888,
          login: 'booyah',
        },
      ];
      const searchUsersSuccessAction = {
        type: SEARCH_USERS_SUCCESS,
        searchResults,
      };
      const updatedState = {
          ...initialState,
          searchResults
      };
      expect(listReducer(initialState, searchUsersSuccessAction)).to.deep.equal(updatedState);
    });
})
