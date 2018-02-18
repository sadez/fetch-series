import React, { Component } from 'react';
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
      <Layout>
        <List className="listStyle">
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

export default withRoot(About);
