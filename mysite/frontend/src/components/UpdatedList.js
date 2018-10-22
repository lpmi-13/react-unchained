// Vendor 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Application
import { FETCH_UPDATED_LIST } from '../constants';
import ResultsTable from './ResultsTable';

class ConnectedUpdatedList extends Component {

  componentDidMount() {
    if(!this.props.alreadyFetched) {
      this.props.onFetchUpdatedList();
    }
  } 

  render() {

    const { extraText, fetching, users } = this.props;

    return (
      <div>
          {extraText()}
          <ResultsTable fetching={fetching} users={users} />
      </div>
    )
  }
}

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

ConnectedUpdatedList.propTypes = {
  alreadyFetched: PropTypes.bool.isRequired,
  extraText: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchUpdatedList: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}

const UpdatedList = connect(mapStateToProps, mapDispatchToProps)(ConnectedUpdatedList);

export default UpdatedList;
