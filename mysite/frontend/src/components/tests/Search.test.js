import React from 'react';
import { Search } from '../Search';
import { spy } from 'sinon';

const defaultProps = {
  fetching: false,
  onSearchUsers: () => {},
  searchResults: [],
}

describe.only('`Search` component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Search { ...defaultProps } />);
    expect(wrapper).exist;
  });

  it('should search for users when the button is clicked', () => {
      const onSearchUsers = spy();
      const propsWithSpy = { ...defaultProps, onSearchUsers };
      const wrapper = mount(<Search { ...propsWithSpy } />);

      wrapper.find('.floater').simulate('click');
      expect(onSearchUsers).to.have.been.calledWith(onSearchUsers);
  });

  it('should call the search function with the name in the input', () => {
      const name = 'purcell';
      const onSearchUsers = spy();
      const propsWithSpy = { ...defaultProps, onSearchUsers };
      const wrapper = shallow(<Search { ...propsWithSpy } />);

      console.log(wrapper.debug());
      wrapper.setState({ name });
      wrapper.find('button').simulate('click');
      expect(onSearchUsers).to.have.been.called.with(name);
  });

  it('should display the results of the search', () => {
      const searchResults = [
          {
              login: 'purcell',
              contribs: 9001,
          },
      ];
      const propsWithResults = {
          ...defaultProps,
          searchResults,
      };
      const wrapper = shallow(<Search { ...propsWithResults } />);
      expect(wrapper.find('.user-row')).length(1);
  });
});