import Layout from '../components/MyLayout.js'
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Movie from 'material-ui-icons/Movie';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Stars from '../components/Stars';
import NestedList from '../components/NestedList';
import series from '../utils/series.json'

class Post extends Component {

      constructor(props){
      super(props);
      this.state = {
        data:{}
      };
    };

    render(){
      const show = this.props.show;

      if (show){
      return(
        <Layout>
          <List  className="listStyle">
          <Card raised = {true} className="cardStyle">
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
                  <Typography type="body1" className='threePoints'>{ReactHtmlParser(show.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, ""))}</Typography>
                </CardContent>
                <CardActions>
                    <Button href={`http://www.imdb.com/title/${show.externals.imdb}`} raised color="primary" >
                      <Movie className="rightIconButton"/>
                     IMDb
                   </Button>
                </CardActions>
            </Card>

            <Card raised = {true} className="cardStyle">
                  <CardContent>
                    <Typography type="headline">{show.name}</Typography>
                    <Typography type="subheading">X</Typography>
                    <Typography type="subheading">Nombre Saisons : 3</Typography>
                    <NestedList/>
                  </CardContent>
              </Card>

          </List>
        </Layout>
      );
    }
  }
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  //const res = await fetch(`https://api.tvmaze.com/shows/${id}`)

  //const show = await res.json()
  const show = {    "id":975,"url":"http://www.tvmaze.com/shows/975/batman","name":"Batman","type":"Scripted","language":"English","genres":["Comedy","Action","Children","Crime","Science-Fiction"],"status":"Ended","runtime":30,"premiered":"1966-01-12","officialSite":null,"schedule":{"time":"19:30","days":["Thursday"]},"rating":{"average":8.2},"weight":79,"network":{"id":3,"name":"ABC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":2719,"thetvdb":77871,"imdb":"tt0059968"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/16463.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/16463.jpg"},"summary":"<p>Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including Catwoman, Egghead, The Joker, King Tut, The Penguin, and The Riddler.</p>","updated":1512931633,"_links":{"self":{"href":"http://api.tvmaze.com/shows/975"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/95649"}}  };

  //const series = {}
  return { show }
};

export default Post;
