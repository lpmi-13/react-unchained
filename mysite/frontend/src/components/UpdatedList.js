// Vendor 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';

// Application
import ResultsTable from './ResultsTable';
import UpdatedAlgoResults from './UpdatedAlgoCode';
import {
  FETCH_UPDATED_LIST,
  UPDATED_RESULTS_LABEL
} from '../constants';

const styles = {
  content: {
    margin: '.5rem'
  }
}

class UpdatedList extends Component {

  componentDidMount() {
    if(!this.props.alreadyFetched) {
      this.props.onFetchUpdatedList();
    }
  }

  render() {

    const { fetching, users } = this.props;

    return (
      <div>
        <Grid container direction="column" alignItems="flex-start" spacing={16}>
          <Grid item xs={12} md={8} style={styles.content}>
            <UpdatedAlgoResults />
          </Grid>
          <Grid item xs={12} md={8} className="original-results">
              {!fetching && <ResultsTable label={UPDATED_RESULTS_LABEL} users={users} />}
              {fetching && <CircularProgress />}
          </Grid>
        </Grid>
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
    alreadyFetched: state.updatedAlreadyFetched,
    error: state.updatedError,
    fetching: state.updatedFetching,
    users: state.updatedUsers,
  };
};

UpdatedList.propTypes = {
  alreadyFetched: PropTypes.bool.isRequired,
  extraText: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchUpdatedList: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatedList);

export { UpdatedList };
