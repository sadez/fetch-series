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

//Component to parse and design a Login card with cardmedia ,cardcontent , cardactions and forms

class LoginCard extends Component {


  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
     checkedA: true
   };
  };

    handleChange(event) {
       this.setState({checkedA: event.target.checked});
       console.log(this.state);
     }

  render(){
      return(
        <Card raised = {true} className="">
              <CardContent>
                <Grid container direction='row' justify='center' alignItems='center'>
                  <Grid item></Grid>
                  <Grid item>
                      <Button variant="fab" color="primary" style={{ width: 100, height: 100}}>
                    <AccountCircle style={{ width: 100, height: 100}}/>
                    </Button>
                  <br/>
                  <br/>
                      <Typography className="textLogin" variant="title" >
                      Login
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
      );

  }
}
export default LoginCard;
