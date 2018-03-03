import React, { Component } from 'react';
import { NextAuth } from 'next-auth/client'
import Router from 'next/router'
import Link from 'next/link'
//mui imports
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import {  FormLabel,  FormControl,  FormGroup,  FormControlLabel,  FormHelperText,} from 'material-ui/Form';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Checkbox from 'material-ui/Checkbox';
//local imports
import withRoot from '../components/withRoot';
import LayoutDisconnected from '../components/LayoutDisconnected.js'
import LoginCard from '../components/LoginCard.js'
import SignInMessage from '../components/SignInMessage.js'
import AvatarProfile from '../components/AvatarProfile.js'

//Profile page ./profile
class Profile extends Component {

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
          <LayoutDisconnected session = {this.props.session}>
              <Card raised = {true} className="">
                    <CardContent>
                      <Grid container direction='row' justify='center' alignItems='center'>
                        <Grid item></Grid>
                        <Grid item>
                          <AvatarProfile></AvatarProfile>
                            <Typography  variant="title" >Name </Typography>
                            <Typography > date inscription </Typography>
                            <Typography > nombre series favorits </Typography>
                        </Grid>
                        <Grid item></Grid>
                      </Grid>
                    </CardContent>
                </Card>
                <br/>
                <Card raised = {true} className="">
                      <CardContent>
                        <Grid container direction='row' justify='center' alignItems='center'>
                          <Grid item></Grid>
                          <Grid item>
                              <Typography > email </Typography>
                              <Typography > mot de passe </Typography>
                          </Grid>
                          <Grid item></Grid>
                        </Grid>
                      </CardContent>
                  </Card>

          </LayoutDisconnected>
        );
  }
}

export default withRoot(Profile);
