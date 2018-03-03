import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router'
//mui imports
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import Button from 'material-ui/Button';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import ResponsiveDialog from './ResponsiveDialog';

// inline-style
const style = {
  flex: 1,
  justifyContent: 'flex-start'
};
const zindex = {
  zIndex: '2'
};

// our Header component
class Header extends Component {

  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }
  componentWillMount() {

    if (this.props.session) {
      if(!this.props.session.user){
        this.setState({ auth: false });
      }
      else {
        this.setState({ auth: true });
      }
    } else {
      this.setState({ auth: false });
    }

  }

  state = {
    auth: true,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClose1 = () => {
    this.setState({ anchorEl: null });
    Router.push({pathname: '/profile'})
  };
  handleClose2 = () => {
    this.setState({ anchorEl: null });
    Router.push({pathname: '/auth/logout'})
  };

  render(){

    const { auth,anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return(
      <div className="headerC">
        <AppBar position="fixed" style={zindex}>
          <Toolbar  >
            <Typography variant="title" color="inherit" >
                My series
           </Typography>
           <IconButton  color="inherit" aria-label="Delete">
             <ArrowDropDown />
           </IconButton>
           <div style={style}></div>
           {!auth && (  <Link href="/auth">
              <Button color="inherit">Login</Button>
             </Link>)}
                  {!auth && (<div>
                 <IconButton
                   aria-owns={open ? 'menu-appbar' : null}
                   aria-haspopup="true"
                   onClick={this.handleMenu}
                   color="inherit"
                 >
                   <AccountCircle />
                 </IconButton>
                 <Menu
                   id="menu-appbar"
                   anchorEl={anchorEl}
                   anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                   }}
                   transformOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                   }}
                   open={open}
                   onClose={this.handleClose}
                 >
                  <MenuItem onClick={this.handleClose1}>
                   <ListItemIcon>
                     <AccountCircle />
                   </ListItemIcon>
                   <ListItemText inset primary="Profile" />
                  </MenuItem>
                  <ResponsiveDialog ></ResponsiveDialog>
                 </Menu>
               </div>
               )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default Header;
