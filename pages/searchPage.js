import withRoot from '../components/withRoot';
import Layout from '../components/MyLayout.js'
import SerieBarSearch from '../components/SerieBarSearch.js'
import FilmCard from '../components/FilmCard.js';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class SearchPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      data:{}
    };
  };

  render(){
    const shows = this.props.shows;

    if(!(Object.keys(shows).length === 0 && shows.constructor === Object)){
      return(
        <Layout>
            <List className="listStyle">
                <SerieBarSearch/>
             </List>

           <List className="listStyle">
           {shows.map(({show}) => (
              <FilmCard data={show}  key={show.id}></FilmCard>
           ))}
           </List>

        </Layout>
      );
    } else return(
      <Layout>
        <br/><br/><br/>
          <SerieBarSearch/>
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
