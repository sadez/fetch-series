import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import ReactHtmlParser from 'react-html-parser';
//mui imports
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';
//local imports
import Layout from '../components/MyLayout.js';
import FilmCard from '../components/FilmCard.js';
import withRoot from '../components/withRoot';
import Stars from '../components/Stars';

//index page ./
class Index extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data:{}
    };
  };

  render() {
    const shows = this.props.shows;
    if(!(Object.keys(shows).length === 0 && shows.constructor === Object)){
      console.log(shows)
      return (
        <Layout>
             <List className="listStyle">
             {shows.map(({show}) => (
                <FilmCard data={show}  key={show.id}></FilmCard>
             ))}
             </List>
         </Layout>
      );
    }
    else{
      return(
        <Layout>
          <br/><br/><br/>
         </Layout>
      );
    }

  }
}

Index.getInitialProps = async function(context) {

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

export default withRoot(Index);
