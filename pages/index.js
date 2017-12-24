import React, { Component } from 'react';
import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { withStyles } from 'material-ui/styles';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Movie from 'material-ui-icons/Movie';
import Stars from '../components/Stars';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { yellow, purple } from 'material-ui/colors';


class Index extends Component {


  constructor(props){
    super(props);
    this.state = {
      data:{}
    };
  };


  render(){

    const shows = this.props.shows;


    if (shows){
      return(
        <Layout>

            <List className="listStyle">
            {shows.map(({show}) => (
            <Card raised = {true} className="cardStyle" key={show.id}>
               <CardMedia
                 title={show.name}
                 image={show.image ? show.image.medium :'http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg'}
                 className="cardMediaStyle" />
               <CardContent>
                 <Typography type="headline">{show.name}</Typography>
                 <Typography type="subheading">{show.language}</Typography>
                 <Typography type="subheading">Premiere :{show.premiered}</Typography>
                 <Typography type="subheading">Durée    :{show.runtime} min</Typography>
                 <Stars average={show.rating.average}></Stars>
                 <Typography type="body1" className='threePoints'>{ReactHtmlParser(show.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").substring(0,200))}...</Typography>

               </CardContent>
               <CardActions>
                 <Link href={`/post?id=${show.id}`}>
                   <Button raised color="primary">
                      More info
                   </Button>
                   </Link>                   
               </CardActions>
           </Card>

            ))}
            </List>
        </Layout>
      );
    }

  }
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  return {
    shows: data
  }
}

export default Index;
