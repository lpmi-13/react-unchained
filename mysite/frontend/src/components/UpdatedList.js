// Vendor 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import key from 'weak-key';
import PropTypes from 'prop-types';

// Application
import { fetchUpdatedList } from '../actions';
import { FETCH_UPDATED_LIST } from '../constants';

import TableRow from './TableRow';
import UpdatedAlgoCode from './UpdatedAlgoCode';

class ConnectedUpdatedList extends Component {

  componentDidMount() {
    if(!this.props.alreadyFetched) {
      this.props.onFetchUpdatedList();
    }
  } 

  render() {

    const { error, fetching, alreadyFetched, users } = this.props;

    return (
      <div>
        <div>
          <UpdatedAlgoCode />
          <h2>The updated list</h2>
          <p>(Note: these numbers are not restricted to
          a particular time and reflect the sum of all
          merged PRs from a particular user)</p>
          <table>
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">User</th>
                <th scope="col">Contributions</th>
              </tr>
            </thead>
            <tbody>
              { fetching ? <div>Loading...</div> : users.map((user, i) => ( <TableRow
                key={user.login}
                rowNumber={i + 1}
                userName={user.login}
                contributions={user.contribs}
          />)) }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUpdatedList: () => dispatch({ type: FETCH_UPDATED_LIST })
  };
};

const mapStateToProps = state => {
  return { 
    users: state.updatedUsers,
    fetching: state.updatedFetching,
    error: state.updatedError,
    alreadyFetched: state.updatedAlreadyFetched
  };
};

const UpdatedList = connect(mapStateToProps, mapDispatchToProps)(ConnectedUpdatedList);

export default UpdatedList;
