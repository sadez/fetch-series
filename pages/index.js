import React from 'react';
import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import Button from 'material-ui/Button';
import Dialog, {  DialogTitle,  DialogContent,  DialogContentText,  DialogActions,} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';
import fetch from 'isomorphic-unfetch';
import Stars from '../components/Stars';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Movie from 'material-ui-icons/Movie';
import { yellow, purple } from 'material-ui/colors';


class Index extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      open: false,
      data:{}
    };
  };
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
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
                  <Typography type="subheading">{show.language}</Typography>
                  <Typography type="subheading">Premiere :{show.premiered}</Typography>
                  <Typography type="subheading">Durée    :{show.runtime} min</Typography>
                  <Stars average={show.rating.average}></Stars>
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
  console.log(context)
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
