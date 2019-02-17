// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// Application
import ResultsTable from './ResultsTable';
import OriginalAlgoResults from './OriginalAlgoCode';
import {
  FETCH_ORIGINAL_LIST,
  ORIGINAL_RESULTS_LABEL
} from '../constants';

const styles = {
  content: {
    margin: '.5rem'
  }
}

class OriginalList extends Component {

  componentDidMount() {
    if (!this.props.alreadyFetched) {
      this.props.onFetchOriginalList();
    }
  } 

  render() {

    const { fetching, users } = this.props;
    return (
      <div>
        <Grid container direction="column" alignItems="flex-start" spacing={16}>
          <Grid item xs={12} md={8} style={styles.content}>
            <OriginalAlgoResults />
          </Grid>
          <Grid item xs={12} md={8} className="original-results">
              {!fetching && <ResultsTable label={ORIGINAL_RESULTS_LABEL} users={users} />}
              {fetching && <CircularProgress />}
          </Grid>
        </Grid>
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
    alreadyFetched: state.originalAlreadyFetched,
    error: state.originalError,
    fetching: state.originalFetching,
    users: state.originalUsers,
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
