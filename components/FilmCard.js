import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Stars from '../components/Stars';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import Button from 'material-ui/Button';



class FilmCard extends Component {

  render(){

    const { data } = this.props;
    console.log()
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
             <Typography type="body1" className='threePoints'>{data.summary ? ReactHtmlParser(data.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").substring(0,200)) : show.name}...</Typography>
           </CardContent>
           <CardActions>
             <Typography>
               <Link as={`/p/${data.id}`} href={`/post?id=${data.id}`}>
                 <Button raised color="primary">More info</Button>
               </Link>
             </Typography>
           </CardActions>
        </Card>
      );

  }
}



export default FilmCard;
