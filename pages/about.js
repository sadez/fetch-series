import React, { Component } from 'react';
import { NextAuth } from 'next-auth/client'
import Router from 'next/router'
import Link from 'next/link'
//mui imports
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import {  FormLabel,  FormControl,  FormGroup,  FormControlLabel,  FormHelperText,} from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import AccountCircle from 'material-ui-icons/AccountCircle';
//local imports
import withRoot from '../components/withRoot';
import Layout from '../components/MyLayout.js'

//About page ./page
class About extends Component {

  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req})
    }
  }

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignOutSubmit = this.handleSignOutSubmit.bind(this)

    this.state = {
     checkedA: true
   };
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


    handleChange(event) {
       this.setState({checkedA: event.target.checked});
       console.log(this.state);
     }

  render(){
    return(
      <Layout>
        <List className="listStyle">
          <SignInMessage {...this.props}/>

          <Card raised = {true} className="">
                <CardContent>
                  <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item></Grid>
                    <Grid item>
                      <AccountCircle style={{          width: 100,          height: 100,        }}/>
                        <Typography className="textLogin" variant="title" >
                        Login
                        </Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                    <br/>



                         <FormControl fullWidth >
                           <Input placeholder="email" />
                           <br/>
                           <Input placeholder="password" />
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

                    <Button variant="raised" color="primary" >
                     Login
                   </Button>
                   <Button  color="primary" >
                    Sign up
                  </Button>
                </CardActions>
            </Card>
         </List>
      </Layout>
    );
  }
}


export class SignInMessage extends React.Component {
  render() {
    if (this.props.session.user) {
      return (
        <React.Fragment>
          <p><Link href="/auth"><a className="btn btn-secondary">Manage Account</a></Link></p>
          <form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignOutSubmit}>
            <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
            <button type="submit" className="btn btn-outline-secondary">Sign out</button>
          </form>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <p><Link href="/auth"><a className="btn btn-primary">Sign in</a></Link></p>
        </React.Fragment>
      )
    }
  }
}

export default withRoot(About);
