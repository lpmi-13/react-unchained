// Vendor
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    justify: 'space-between',
  },
};

class HeaderAppBar extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event =>{
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
       <AppBar position="static">
         <Toolbar className="toolbar">
             <Typography>Github User Stats</Typography>
             <IconButton
               aria-owns={ anchorEl ? 'simple-menu' : null}
               aria-haspopup="true"
               onClick={this.handleClick} 
               className="menuButton"
               color="inherit" 
               aria-label="Menu">
               <MenuIcon />
             </IconButton>
             <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}
               >
               <MenuItem onClick={this.handleClose}><Link to='/'>Home</Link></MenuItem>
               <MenuItem onClick={this.handleClose}><Link to='/original_list'>Total Commits</Link></MenuItem>
               <MenuItem onClick={this.handleClose}><Link to='/updated_list'>Merged PRs</Link></MenuItem>
               <MenuItem onClick={this.handleClose}><Link to='/search'>Search</Link></MenuItem>
             </Menu>
         </Toolbar>
       </AppBar>
     </div>
    )
  }
}

export default withStyles(styles)(HeaderAppBar);
