// pages/about.js
import withRoot from '../components/withRoot';
import Layout from '../components/MyLayout.js'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';
import List from 'material-ui/List';




class About extends Component {

  render(){
    return(
      <Layout>
        <List className="listStyle">
           <Paper className="paperStyle" elevation={4}>
             <Typography type="headline" component="h3">
               Copyright Policy
             </Typography>
             <br/>
              <img className="aboutImg" src='https://static.tvmaze.com/images/api/tvm_api.png' />
              <br/>
              <br/>
             <Typography component="p">
               TVmaze is a collaborative site, which can be edited by any registered user. Our users are instructed and encouraged to respect copyrights. In practice this means that we only allow content that..

     cannot be copyrighted: facts, such as episode names and airdates
     has been expressly created for the purpose of distribution, such as press releases or press photos
     has been released under a license that permits redistribution, such as CC-BY
     was originally created by the user submitting it to TVmaze
     If you feel that, despite these precautions, your copyright has been violated, please file a complaint with us via our Forums, and one of our moderators will handle your claim as soon as possible.
             </Typography>
           </Paper>
         </List>
      </Layout>
    );
  }
}

export default withRoot(About);
