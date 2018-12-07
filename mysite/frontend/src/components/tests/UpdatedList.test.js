import React from 'react';

import { UpdatedList}  from '../UpdatedList';

const defaultProps = {
  alreadyFetched: false,
  extraText: () => {},
  fetching: false,
  onFetchUpdatedList: () => {},
  users: [],
}

describe('`UpdatedList` component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<UpdatedList {...defaultProps} />);
    expect(wrapper).to.exist; 
  });
});