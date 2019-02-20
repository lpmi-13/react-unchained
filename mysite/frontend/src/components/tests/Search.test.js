import React from 'react';
import Button from '@material-ui/core/Button';
import { Search } from '../Search';
import sinon, { spy } from 'sinon';

const defaultProps = {
  fetching: false,
  onSearchUsers: () => {},
  searchResults: [],
}

describe('`Search` component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Search { ...defaultProps } />);
    expect(wrapper).exist;
  });

  it('should search for users when the button is clicked', () => {
      const onSearchUsers = spy();
      const propsWithSpy = { ...defaultProps, onSearchUsers };
      const wrapper = shallow(<Search { ...propsWithSpy } />);

      wrapper.find(Button).simulate('click');
      assert(onSearchUsers.called);
  });

  it('should call the search function with the name in the input', () => {
      const name = 'purcell';
      const onSearchUsers = spy();
      const propsWithSpy = { ...defaultProps, onSearchUsers };
      const wrapper = shallow(<Search { ...propsWithSpy } />);

      wrapper.setState({ name });
      wrapper.find(Button).simulate('click');
      sinon.assert.calledWith(onSearchUsers, { userName: name });
  });

  describe('should display the results of the search', () => {
    it('with results only from the updated list', () => {
      const searchResults = [
          {
            Rank_Unique_Commits_Users: {
              rank: 1,
              login: 'purcell',
              contributions: 628,
            }
          },
      ];
      const propsWithResults = {
          ...defaultProps,
          searchResults,
      };
      const wrapper = shallow(<Search { ...propsWithResults } />);
      expect(wrapper.find('.updated-results')).to.exist;
      expect(wrapper.find('.original-results')).to.be.empty;
    });

    it('with results only from the original list', () => {
        const searchResults = [
          {
            Rank_Total_Commits_Users: {
              rank: 1,
              login: 'purcell',
              contributions: 9001,
            },
          }
        ];
        const propsWithResults = {
            ...defaultProps,
            searchResults,
        };
        const wrapper = shallow(<Search { ...propsWithResults } />);
        expect(wrapper.find('.original-results')).to.exist;
        expect(wrapper.find('.updated-results')).to.be.empty;
    });

    it('with results from both lists', () => {
        const searchResults = [
          {
            Rank_Total_Commits_Users: {
                rank: 1,
                login: 'purcell',
                contributions: 9001,
            },
            Rank_Unique_Commits_Users: {
              rank: 234,
              login: 'purcell',
              contributions: 628,
            }
          }
        ];
        const propsWithResults = {
            ...defaultProps,
            searchResults,
        };
        const wrapper = shallow(<Search { ...propsWithResults } />);
        expect(wrapper.find('.original-results')).to.exist;
        expect(wrapper.find('.updated-results')).to.exist;
    });
  });
});