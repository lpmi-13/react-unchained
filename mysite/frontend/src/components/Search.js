// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
    this.props.onSearchUsers({ userName: this.state.name });
  }

  render() {

    const {
      props: {
        fetching,
        searchResults : {
          Rank_Total_Commits_Users,
          Rank_Unique_Commits_Users,
        }
      }
    } = this;
    
    // we haz no search results!
    const noSearchResults = Rank_Unique_Commits_Users && Rank_Unique_Commits_Users.length === 0 &&
                            Rank_Total_Commits_Users && Rank_Total_Commits_Users.length === 0;

    return (
      <div>
        <Grid container direction="column" alignItems="flex-start" spacing={24}>
          <Grid item xs={8}>
            <TextField
              id="standard-name"
              label="user name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}>
            <Button 
              variant="contained"
              className="floater"
              onClick={this.handleOnClick}
            >
              Search
            </Button>
          </Grid>
          
          {fetching && "Loading..."}
           {
             Rank_Total_Commits_Users && Rank_Total_Commits_Users.length > 0 &&
               <Grid item xs={18} className="original-results">
                 <Typography>
                   <ResultsTable
                     label={ORIGINAL_RESULTS_LABEL}
                     users={Rank_Total_Commits_Users}
                   />
                 </Typography>
               </Grid>
            }
            {
              Rank_Unique_Commits_Users && Rank_Unique_Commits_Users.length > 0 &&
                <Grid item className="updated-results">
                  <Typography>
                    <ResultsTable
                      label={UPDATED_RESULTS_LABEL}
                      users={Rank_Unique_Commits_Users}
                    />
                  </Typography>
                </Grid>
            }
            {
              noSearchResults &&
                <Grid item className="no-results">
                  <Typography>
                    <ResultsTable
                      label={NO_RESULTS_LABEL}
                      users={[]}
                    />
                  </Typography>
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