// pages/about.js
import withRoot from '../components/withRoot';
import Layout from '../components/MyLayout.js'
import InputSearch from '../components/InputSearch.js'
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';
import List from 'material-ui/List';
import Search from 'material-ui-icons/Search';
import Mic from 'material-ui-icons/Mic';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Input from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';



class SearchPage extends Component {

  render(){
    return(
      <Layout>
          <List className="listStyle">
            <br/>
            <br/>
            <br/>
            <br/>
             <AppBar position="static" color="default">
                <Toolbar>
                  <IconButton aria-label="Search" >
                    <Search/>
                  </IconButton>
                  <Typography className="classflex" type="title" color="inherit">
                    <span>
                      <FormControl fullWidth >
                      <Input
                       defaultValue="Hello world"
                       inputProps={{
                         'aria-label': 'Description',
                       }}
                     />
                    </FormControl>
                    </span>
                  </Typography>
                  <IconButton aria-label="Search">
                    <Mic/>
                  </IconButton>
                </Toolbar>
              </AppBar>

         </List>
      </Layout>
    );
  }
}

export default withRoot(SearchPage);
