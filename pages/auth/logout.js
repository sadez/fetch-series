import React from 'react'
import Router from 'next/router'
import { NextAuth } from 'next-auth/client'
import LayoutDisconnected from '../../components/LayoutDisconnected.js'
import withRoot from '../../components/withRoot';

class LogoutPage extends  React.Component {

  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req})
    }
  }

  constructor (props) {
    super(props);
    this.handleSignOutSubmit = this.handleSignOutSubmit.bind(this)

  };

componentDidMount() {
  NextAuth.signout()
  .then(() => {
    Router.push('/auth/callback')
  })
  .catch(err => {
    Router.push('/auth/error?action=signout')
  })
}

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



  render() {
      return (
      <LayoutDisconnected>
        <div></div>
      </LayoutDisconnected>
      )
  }
}
export default withRoot(LogoutPage);
