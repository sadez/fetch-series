import React, { Component } from 'react';
import { NextAuth } from 'next-auth/client'
import Router from 'next/router'
import Link from 'next/link'
//mui imports
import List from 'material-ui/List';
//local imports
import withRoot from '../components/withRoot';
import Layout from '../components/MyLayout.js'
import LoginCard from '../components/LoginCard.js'
import SignInMessage from '../components/SignInMessage.js'

//About page ./page
class About extends Component {

  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req})
    }
  }

  constructor (props) {
    super(props);
    this.handleSignOutSubmit = this.handleSignOutSubmit.bind(this)

  };

  handleSignOutSubmit(event) {
    event.preventDefault()
    NextAuth.signout()
    .then(() => {
      Router.push('/auth/callback')
    })
    .catch(err => {
      Router.push('/auth/error?action=signout')
    })
  }

  render(){
    return(
      <Layout>
        <List className="listStyle">
          <SignInMessage {...this.props}/>
         </List>
      </Layout>
    );
  }
}

export default withRoot(About);
