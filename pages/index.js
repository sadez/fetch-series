import React from 'react';
import Layout from '../components/MyLayout.js';
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
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  if(context.query){
    const res2 = await fetch(`https://api.tvmaze.com/search/shows?q=${id}`)
    return {
  		shows:  await res2.json()
  	}
  }

  const data = await res.json();

	return {
		shows: data
	}
}

export default withRoot(Index);
