import Link from 'next/link'
import React, { Component } from 'react';
//mui imports
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import {  FormLabel,  FormControl,  FormGroup,  FormControlLabel,  FormHelperText,} from 'material-ui/Form';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Checkbox from 'material-ui/Checkbox';

class SignInMessage extends React.Component {

  constructor (props) {
    super(props);
  };

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
          <Card raised = {true} className="">
                <CardContent>
                  <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item></Grid>
                    <Grid item>
                      <Link href="/auth">
                        <Button  variant="fab" color="primary" style={{ width: 100, height: 100}}>
                          <AccountCircle style={{ width: 100, height: 100}}/>
                        </Button>
                      </Link>
                    <br/>
                    <br/>
                        <Typography className="textLogin" variant="title" >
                        Click
                        </Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                  {/* A JSX comment
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
                   */}
                </CardContent>

            </Card>
      )
    }
  }
}


export default SignInMessage;
