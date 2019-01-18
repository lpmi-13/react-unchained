import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { OriginalList } from '../OriginalList';
import ResultsTable from '../ResultsTable';

const defaultProps = {
    alreadyFetched: false,
    extraText: () => {},
    fetching: false,
    onFetchOriginalList: () => {},
    users: [],
}

const mockedUsers = [
    {
      rank: 1, 
      contributions: 28287,
      login: "toxtli"
    },
    { rank: 2,
      contributions: 3838,
      login: "fake-o"
    },
    { rank: 3,
      contributions: 34,
      login: "funk-dubious"
    },
];

describe('the `OriginalList` component', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<OriginalList { ...defaultProps } />);
    expect(wrapper).to.exist;
  });

  it('should show the `CircularProgress` loader while fetching', () => {
    const propsWhileFetching = {
      ...defaultProps,
      fetching: true,
    };
    const wrapper = mount(<OriginalList { ...propsWhileFetching } />);
    expect(wrapper.find(CircularProgress).length).to.equal(1);
  });

  it('should show the `ResultsTable` when not loading and results have returned', () => {
    const propsAfterResults = {
      ...defaultProps,
      users: mockedUsers,
    }
    const wrapper = mount(<OriginalList { ...propsAfterResults } />);
    expect(wrapper.find(CircularProgress).length).to.equal(0);
    expect(wrapper.find(ResultsTable).length).to.equal(1);
  });

  it('should correctly load the full list of results', () => {
    const promise = Promise.resolve(mockedUsers);
    const onFetchOriginalList = () => promise;
  
    const updatedProps = { ...defaultProps, onFetchOriginalList };

    const wrapper = mount(<OriginalList {...updatedProps} />);
  
    return promise.then(() => {
      wrapper.update();
    }).then(() => {
      expect(wrapper.find(ResultsTable).length).to.equal(1);
    });
  });
});