// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Application
import { FETCH_ORIGINAL_LIST } from '../constants';
import ResultsTable from './ResultsTable';

class ConnectedOriginalList extends Component {

  componentDidMount() {
    if (!this.props.alreadyFetched) {
      this.props.onFetchOriginalList();
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
    onFetchOriginalList: () => dispatch({ type: FETCH_ORIGINAL_LIST })
  };
};

const mapStateToProps = state => {
  return { 
    users: state.originalUsers,
    fetching: state.originalFetching,
    error: state.originalError,
    alreadyFetched: state.originalAlreadyFetched
  };
};

ConnectedOriginalList.propTypes = {
  alreadyFetched: PropTypes.bool.isRequired,
  extraText: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchOriginalList: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}

const OriginalList = connect(mapStateToProps, mapDispatchToProps)(ConnectedOriginalList);

export default OriginalList;
