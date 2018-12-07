import React from 'react';
import { stub } from 'sinon';
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
      contribs: 28287,
      login: "toxtli"
    },
    { contribs: 3838,
      login: "fake-o"
    },
    { contribs: 34,
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
    console.log(wrapper.debug());
    expect(wrapper.find(<CircularProgress/>)).length(1);
  });

  it('should show the `ResultsTable` when not loading and results have returned', () => {
    const propsAfterResults = {
      ...defaultProps,
      users: mockedUsers,
    }
    const wrapper = mount(<OriginalList { ...propsAfterResults } />);
    console.log(wrapper.debug());
    expect(wrapper.find(<CircularProgress/>)).length(0);
    expect(wrapper.find('.results-table')).length(1);
  });

  it.skip('should correctly load the full list of results', () => {
    const promise = Promise.resolve(mockedUsers);
    const onFetchOriginalList = () => promise;
  
    const updatedProps = { ...defaultProps, onFetchOriginalList };

    const wrapper = mount(<OriginalList {...updatedProps} />);
  
    return promise.then(() => {
      expect(wrapper.state()).to.have.property('users', []);
  
      wrapper.update();
    }).then(() => {
      expect(wrapper.to.contain(<ResultsTable/>));
    });
  });
});