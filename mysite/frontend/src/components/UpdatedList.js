// Vendor 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

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
      <Typography>
        {extraText()}
        <ResultsTable fetching={fetching} users={users} />
      </Typography>
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
