import React, { Component } from 'react';
import Link from 'next/link';
//mui imports
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MoreVert from 'material-ui-icons/MoreVert';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

// inline-style
const style = {
  flex: 1,
  justifyContent: 'flex-start'
};
const zindex = {
  zIndex: '2000'
};

// our Header component
class Header extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="headerC">
        <AppBar position="fixed" style={zindex}>
          <Toolbar  >
            <Typography type="title" color="inherit" >
                My series
           </Typography>
           <IconButton  color="contrast" aria-label="Delete">
             <ArrowDropDown />
           </IconButton>
           <div style={style}></div>
            <IconButton  color="contrast" aria-label="Search">
              <MoreVert/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default Header;
