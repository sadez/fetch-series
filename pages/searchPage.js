import withRoot from '../components/withRoot';
import Router from 'next/router';
import Layout from '../components/MyLayout.js'
import InputSearch from '../components/InputSearch.js'
import Button from 'material-ui/Button';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Stars from '../components/Stars';
import ReactHtmlParser from 'react-html-parser';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Search from 'material-ui-icons/Search';
import Mic from 'material-ui-icons/Mic';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Input from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';



class SearchPage extends Component {

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data:{},
      href :''
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    Router.push({
    pathname: '/searchPage',
    query: { id: this.state.href }
  }, '/searchPage/'+this.state.href)

  }

  handleChange(event) {
     this.setState({href: event.target.value});
   }

  render(){
    const shows = this.props.shows;
    if(!(Object.keys(shows).length === 0 && shows.constructor === Object)){
    return(
      <Layout>
          <List className="listStyle">
             <AppBar position="static" color="default">
                <Toolbar className="searchBar">
                  <IconButton aria-label="Search" >
                    <Search/>
                  </IconButton>
                  <Typography className="classflex" type="title" color="inherit">
                    <form className="menuButton" onSubmit={this.handleSubmit}>
                      <FormControl fullWidth>
                      <Input
                       value={this.state.href} onChange={this.handleChange}
                       placeholder="Search Series..."
                       inputProps={{
                         'aria-label': 'Description',
                       }}
                       />
                      </FormControl>
                    </form>

                  </Typography>
                </Toolbar>
              </AppBar>
           </List>

         <List className="listStyle">
         {shows.map(({show}) => (
         <Card raised = {true} className="cardStyle" key={show.id}>
            <CardMedia
              title={show.name}
              image={show.image ? show.image.medium :'http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg'}
              className="cardMediaStyle" />
            <CardContent>
                <Typography type="headline">{show.name}</Typography>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                  <Grid item></Grid>
                  <Grid item>
                    <Stars average={show.rating.average}></Stars>
                  </Grid>
                </Grid>
              <Typography type="subheading">
                <Grid container spacing={24}  direction='row' justify='space-between' alignItems='center'>
                 <Grid item >
                  <span>{show.language}</span>
                 </Grid>
                 <Grid item >
                     <span>{show.premiered}</span>
                 </Grid>
                 <Grid item >
                  <span>{show.runtime} min</span>
                 </Grid>
                </Grid>
               </Typography>
               <br/>
              <Typography type="body1" className='threePoints'>{ReactHtmlParser(show.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").substring(0,200))}...</Typography>
            </CardContent>
            <CardActions>
              <Typography>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                  <Button raised color="primary">More info</Button>
                </Link>
              </Typography>
            </CardActions>
         </Card>

         ))}
         </List>

      </Layout>
    );}
    else return(
      <Layout>
        <br/><br/><br/>
          <List className="listStyle">
             <AppBar position="static" color="default">
                <Toolbar className="searchBar">
                  <IconButton aria-label="Search" >
                    <Search/>
                  </IconButton>
                  <Typography className="classflex" type="title" color="inherit">
                    <form className="menuButton" onSubmit={this.handleSubmit}>
                      <FormControl fullWidth>
                      <Input
                       value={this.state.href} onChange={this.handleChange}
                       placeholder="Search Series..."
                       inputProps={{
                         'aria-label': 'Description',
                       }}
                       />
                      </FormControl>
                    </form>

                  </Typography>
                </Toolbar>
              </AppBar>
           </List>
   </Layout>
    )
  }
}


SearchPage.getInitialProps = async function(context) {

  const { id } = context.query
  if(context.query.id){
    const res2 = await fetch(`https://api.tvmaze.com/search/shows?q=${id}`)
    return {
  		shows:  await res2.json()
  	}
  }

  const data = {};
	return {
		shows: data
	}
}

export default withRoot(SearchPage);
