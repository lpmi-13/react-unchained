import React from 'react';

import UserResults from '../UserResults';

const defaultProps = {
  users: [
    {
      rank: 1,
      login: 'Django',
      contributions: 3838,
    },
    {
      rank: 2,
      login: 'React',
      contributions: 336,
    },
  ]
};

describe('`UserResults component', () => {
  it('should render rows based on the results', () => {  
    const wrapper = shallow(<UserResults {...defaultProps} />);
    expect(wrapper.find('.user-row')).length(2);
  });
})