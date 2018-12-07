// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

// Application
import { FETCH_ORIGINAL_LIST } from '../constants';
import ResultsTable from './ResultsTable';

class OriginalList extends Component {

  componentDidMount() {
    if (!this.props.alreadyFetched) {
      this.props.onFetchOriginalList();
    }
  } 

  render() {

    const { extraText, fetching, users } = this.props;
    return (
      <Typography>
        {extraText()}
        {!fetching && <ResultsTable users={users} />}
        {fetching && <CircularProgress />}
      </Typography>
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

OriginalList.propTypes = {
  alreadyFetched: PropTypes.bool.isRequired,
  extraText: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchOriginalList: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(OriginalList);

export { OriginalList };
