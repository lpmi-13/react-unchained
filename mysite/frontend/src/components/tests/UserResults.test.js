import React from 'react';
import TableRow from '@material-ui/core/TableRow';

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
  ],
  styles : {
      cells : {
        padding: '1rem',
      },
      numeric: {
        padding: '1rem',
        textAlign: 'right',
      },
      tableBody: {
        stripedRows: true,
    }
  }
};


describe('`UserResults component', () => {
  it('should render rows based on the results', () => {  
    const wrapper = shallow(<UserResults {...defaultProps} />);
    expect(wrapper.find(TableRow)).length(2);
  });
})