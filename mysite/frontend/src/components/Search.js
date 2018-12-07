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

class Search extends Component {
  
  propTypes = {
    fetching: PropTypes.bool.isRequired,
    onSearchUsers: PropTypes.func.isRequired,
    searchResults: PropTypes.array,
  }
  
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

  createUserList = users => {
    return (
      <Typography>
        <ResultsTable users={users} />
      </Typography>
    )
  }

  render() {
      const { props: { fetching, searchResults} } = this;
      const styles = ({
          root: {
            flexGrow: 1,
          },
          button: {
            margin: '.5em 0',
          },
          container: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          textField: {
            marginLeft: '.5em',
            marginRight: '.5em',
            width: 200,
          },
        });
  
        return (
        <div className={styles.root}>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <TextField
                id="standard-name"
                label="user name"
                className={styles.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={8}>
              <Button 
                variant="contained"
                className={`${styles.button} floater`}
                onClick={this.handleOnClick}
              >
                Search
              </Button>
            </Grid>
            {fetching && "Loading..."}
            {!fetching && searchResults ? 
               searchResults.length > 0 ?
               this.createUserList(searchResults) 
               : 'no results' : ''}
          </Grid>
        </div>
      )
    }
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