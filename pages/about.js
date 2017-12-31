// pages/about.js
import withRoot from '../components/withRoot';
import Layout from '../components/MyLayout.js'
import React, { Component } from 'react';


class About extends Component {
  render(){
    return(
      <Layout>
         <p>This is the about page</p>
      </Layout>
    );
  }
}

export default withRoot(About);
