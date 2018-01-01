import React from 'react';
import Layout from '../components/MyLayout.js';
import FilmCard from '../components/FilmCard.js';
import Link from 'next/link';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';
import fetch from 'isomorphic-unfetch';
import Stars from '../components/Stars';
import ReactHtmlParser from 'react-html-parser';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';


class Index extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      data:{}
    };
  };

  render() {
    const shows = this.props.shows;
    if(shows){
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
        <div>Error page loading</div>
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
