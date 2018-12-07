import React from 'react';

import UserResults from '../UserResults';


const defaultProps = {
  users: [
    {
      login: 'Django',
      contribs: 3838,
    },
    {
      login: 'React',
      contribs: 336,
    },
  ]
};

describe('`UserResults component', () => {
  it('should render rows based on the results', () => {  
    const wrapper = shallow(<UserResults {...defaultProps} />);
    console.log(wrapper.debug());
    expect(wrapper.find('.user-row')).length(2);
  });
})