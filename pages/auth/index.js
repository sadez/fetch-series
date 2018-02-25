import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import { NextAuth } from 'next-auth/client'
import Layout from '../../components/MyLayout.js'
import withRoot from '../../components/withRoot';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import {  FormLabel,  FormControl,  FormGroup,  FormControlLabel,  FormHelperText,} from 'material-ui/Form';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Checkbox from 'material-ui/Checkbox';

class Index extends  React.Component {

  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req}),
      linkedAccounts: await NextAuth.linked({req}),
      providers: await NextAuth.providers({req})
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      session: this.props.session
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSignInSubmit(event) {
    event.preventDefault()

    if (!this.state.email) return

    NextAuth.signin(this.state.email)
    .then(() => {
      Router.push(`/auth/check-email?email=${this.state.email}`)
    })
    .catch(() => {
      Router.push(`/auth/error?action=signin&type=email&email=${this.state.email}`)
    })
  }

  render() {
    if (this.props.session.user) {
      return (
      <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
          </Head>
          <div className="text-center">
            <h1 className="display-4 mt-3">NextAuth Example</h1>
            <p className="lead mt-3 mb-1">You are signed in as <span className="font-weight-bold">{this.props.session.user.email}</span>.</p>
          </div>
          <div className="row">
            <div className="col-sm-5 mr-auto ml-auto">
              <LinkAccounts
                session={this.props.session}
                linkedAccounts={this.props.linkedAccounts}
                />
            </div>
          </div>
          <p className="text-center">
            <Link href="/"><a>Home</a></Link>
          </p>
        </Layout>
      )
    } else {
      return (
      <Layout>
          <List className="listStyle">
          <Card raised = {true} >
              <form id="signin" method="post" action="/auth/email/signin" onSubmit={this.handleSignInSubmit}>
                <CardContent>
                  <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item></Grid>
                    <Grid item>
                      <AccountCircle style={{ width: 100, height: 100}}/>
                        <Typography className="textLogin" variant="title" >
                        Login
                        </Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                    <br/>
                    <input name="_csrf"  type="hidden"  value={this.state.session.csrfToken}/>
                   <FormControl fullWidth   >
                     <Input name="email" type="text" placeholder="j.smith@example.com" value={this.state.email} onChange={this.handleEmailChange} id="email"/>
                   </FormControl>
                   <FormControl>
                     <FormGroup>
                       <FormControlLabel
                         control={
                           <Checkbox
                              checked={this.state.checkedA}
                              onChange={this.handleChange}
                              value="checkedA"
                            />
                         }
                         label="Remind me"
                       />
                     </FormGroup>
                   </FormControl>
                </CardContent>
                <CardActions>
                    <Button variant="raised" color="primary" type="submit">
                     Sign up
                   </Button>
                </CardActions>
              </form>
            </Card>
          <div className="row">
            <div className="col-sm-6 mr-auto ml-auto">
              <div className="card mt-3 mb-3">
                <div className="card-body pb-0">
                  <SignInButtons providers={this.props.providers}/>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center small">
            <Link href="/auth/credentials"><a>Sign in with credentials</a></Link>
          </p>
          <p className="text-center">
            <Link href="/"><a>Home</a></Link>
          </p>
        </List>
      </Layout>
      )
    }
  }
}
export default withRoot(Index);


export class LinkAccounts extends React.Component {
  render() {
    return (
      <div className="card mt-3 mb-3">
        <h4 className="card-header">Link Accounts</h4>
        <div className="card-body pb-0">
          {
            Object.keys(this.props.linkedAccounts).map((provider, i) => {
              return <LinkAccount key={i} provider={provider} session={this.props.session} linked={this.props.linkedAccounts[provider]}/>
            })
          }
        </div>
      </div>
    )
  }
}

export class LinkAccount extends React.Component {
  render() {
    if (this.props.linked === true) {
      return (
        <form method="post" action={`/auth/oauth/${this.props.provider.toLowerCase()}/unlink`}>
          <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
          <p>
            <button className="btn btn-block btn-outline-danger" type="submit">
              Unlink from {this.props.provider}
            </button>
          </p>
        </form>
      )
    } else {
      return (
        <p>
          <a className="btn btn-block btn-outline-primary" href={`/auth/oauth/${this.props.provider.toLowerCase()}`}>
            Link with {this.props.provider}
          </a>
        </p>
      )
    }
  }
}

export class SignInButtons extends React.Component {
  render() {
    return (
      <React.Fragment>
        {
          Object.keys(this.props.providers).map((provider, i) => {
            return (
              <p key={i}>
                <a className="btn btn-block btn-outline-secondary" href={this.props.providers[provider].signin}>
                  Sign in with {provider}
                </a>
              </p>
              )
          })
        }
      </React.Fragment>
    )
  }
}
