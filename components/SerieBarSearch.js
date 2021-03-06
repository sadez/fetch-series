import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
//mui imports
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Search from 'material-ui-icons/Search';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Input from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

//component of to search a serie from api
class SerieBarSearch extends Component {

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      href :''
    };
  };
  // ex :route to /searchPage/batman
  handleSubmit(event) {
    event.preventDefault();
    Router.push({
      pathname: '/searchPage',
      query: { id: this.state.href }
    },'/searchPage/'+this.state.href)

  }

  handleChange(event) {
     this.setState({href: event.target.value});
   }

  render(){
      return(
        <AppBar position="static" color="default">
           <Toolbar className="searchBar">
             <IconButton aria-label="Search" >
               <Search/>
             </IconButton>
             <div className="classflex" >
               <form className="menuButton" onSubmit={this.handleSubmit}>
                 <FormControl fullWidth>
                 <Input
                  value={this.state.href} onChange={this.handleChange}
                  placeholder="Search Series..."
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                  />
                 </FormControl>
               </form>
             </div>
           </Toolbar>
         </AppBar>
      );
  }
}


export default SerieBarSearch;
