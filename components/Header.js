import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Search from 'material-ui-icons/Search';
import TextField from 'material-ui/TextField';
import MoreVert from 'material-ui-icons/MoreVert';
import TemporaryDrawer from './TemporaryDrawer';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';




// We can use inline-style
const style = {
  //paddingLeft: '5px',
  //paddingRight: '5px',
};


class Header extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="headerC">
        <AppBar position="fixed" >
          <Toolbar style={style} >
            <Typography type="title" color="inherit" >
                My series

           </Typography>
           <IconButton  color="contrast" aria-label="Delete">
           <ArrowDropDown />
           </IconButton>
        {/*   <Typography  >
            <form className="menuButton" onSubmit={this.handleSubmit}>
             <input type="search" value={this.state.href} onChange={this.handleChange} placeholder="Search..."  />
               <Button type="submit" value="Submit"  color="contrast" aria-label="Search">
                  <Search />
                Search
              </Button>
           </form>
           </Typography>
        <Link as={`/search/${this.state.href}`} href={{pathname: '/', query: { id: this.state.href } }}>
             <Button color="contrast">My series</Button>
           </Link>*/}
            <IconButton className="menuButton classflex" color="contrast" aria-label="Search">
              <MoreVert/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default Header;
