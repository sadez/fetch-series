import React, { Component } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
//mui imports
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import FavoriteIcon from 'material-ui-icons/Favorite';
import IconButton from 'material-ui/IconButton';
//local imports
import Stars from '../components/Stars';


//Component to parse and design a film card with cardmedia ,cardcontent and cardactions
//data are information of a film
class FilmCard extends Component {

  render(){
    const { data } = this.props;
      return(
        <Card raised = {true} className="cardStyle">
           <CardMedia
             title={data.name}
             image={data.image ? data.image.medium :'http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg'}
             className="cardMediaStyle" />
           <CardContent>
               <Typography type="headline">{data.name}</Typography>
               <Grid container direction='row' justify='space-between' alignItems='center'>
                 <Grid item></Grid>
                 <Grid item>
                   <Stars average={data.rating ? data.rating.average :'1'}></Stars>
                 </Grid>
               </Grid>
             <Typography type="subheading">
               <Grid container spacing={24}  direction='row' justify='space-between' alignItems='center'>
                <Grid item >
                 <span>{data.language ? data.language : 'English'}</span>
                </Grid>
                <Grid item >
                    <span>{data.premiered ? data.premiered : 'ddd'}</span>
                </Grid>
                <Grid item >
                 <span>{data.runtime ? data.runtime :'20'} min</span>
                </Grid>
               </Grid>
              </Typography>
              <br/>
             <Typography type="body1" className='threePoints'>
               {data.summary ?
                 ReactHtmlParser(data.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").substring(0,200))
                 : data.name}...
             </Typography>
           </CardContent>
           <CardActions>
             <Typography>
               <Link as={`/p/${data.id}`} href={`/post?id=${data.id}`}>
                 <Button raised color="primary">More info</Button>
               </Link>
             </Typography>
              <IconButton color='accent' aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
           </CardActions>
        </Card>
      );

  }
}
export default FilmCard;
