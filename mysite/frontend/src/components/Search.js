// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Application
import ResultsTable from './ResultsTable';
import { searchUsers } from '../actions';
import {
  NO_RESULTS_LABEL,
  ORIGINAL_RESULTS_LABEL,
  UPDATED_RESULTS_LABEL,
} from '../constants';

class Search extends Component {
  
  state = {
    name: '',
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  handleOnClick = () => {
    const { name } = this.state;
    this.props.onSearchUsers({ userName: name });
  }

  render() {

    const {
      props: {
        fetching,
        searchResults : {
          Rank_Total_Commits_Users,
          Rank_Unique_Commits_Users,
        }
      },
    } = this;
    
    // we haz no search results!
    const noSearchResults = (Rank_Total_Commits_Users && Rank_Total_Commits_Users.length < 1) && 
                            (Rank_Unique_Commits_Users && Rank_Unique_Commits_Users.length < 1);

    return (
      <div>
        <Grid container direction="column" alignItems="flex-start" spacing={16}>
          <Grid item xs={12} md={8}>
            <TextField
              id="standard-name"
              label="user name"
              margin="normal"
              onChange={this.handleChange('name')}
              value={this.state.name}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Button 
              variant="contained"
              onClick={this.handleOnClick}
            >
              Search
            </Button>
          </Grid>
          
          {fetching && <CircularProgress/>}
           {
             Rank_Total_Commits_Users && Rank_Total_Commits_Users.length > 0 &&
               <Grid item xs={12} md={8}>
                 <ResultsTable
                   label={ORIGINAL_RESULTS_LABEL}
                   users={Rank_Total_Commits_Users}
                 />
               </Grid>
            }
            {
              Rank_Unique_Commits_Users && Rank_Unique_Commits_Users.length > 0 &&
                <Grid item xs={12} md={8}>
                  <ResultsTable
                    label={UPDATED_RESULTS_LABEL}
                    users={Rank_Unique_Commits_Users}
                  />
                </Grid>
            }
            {
              noSearchResults &&
                <Grid item xs={12} md={8}>
                  <ResultsTable
                    label={NO_RESULTS_LABEL}
                    users={[]}
                  />
                </Grid>
            }
        </Grid>
      </div>
    )
  }
}

Search.propTypes = {
  fetching: PropTypes.bool.isRequired,
  onSearchUsers: PropTypes.func.isRequired,
  searchResults: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    fetching: state.searchingUsers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchUsers: userName => dispatch(searchUsers(userName))  
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(Search);
  

export { Search };