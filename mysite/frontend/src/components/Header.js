// Vendor
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  }
};

class HeaderAppBar extends Component {

  render() {

    return (
      <div>
       <AppBar position="static">
         <Toolbar className="toolbar">
         <Typography color="inherit">Github User Stats</Typography>
           <div style={styles.root}>
             <Button color="inherit"><Link style={styles.link} to='/'>Merged PRs</Link></Button>
             <Button color="inherit"><Link style={styles.link} to='/original_list'>Total Commits</Link></Button>
             <Button color="inherit"><Link style={styles.link} to='/search'>Search</Link></Button>
           </div>
         </Toolbar>
       </AppBar>
     </div>
    )
  }
}

export default withStyles(styles)(HeaderAppBar);
