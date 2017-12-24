import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List from 'material-ui/List';
import series from '../utils/series.json'
import { groupBy } from 'underscore'
import Saison from './Saison'



const styles = theme => ({
  root: {
    //width: '100%',
    //maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

const seasons  = groupBy(series, 'season');

class NestedList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
      number: []
    };
  };



  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  componentWillMount() {

    let arr = [];
    Object.keys(seasons).forEach(function(key) {
      arr.push(seasons[key]);
      //this.setState({ number: !this.state.open });
      });
      this.setState({ number: arr });
  }

  render() {
    const { classes } = this.props;
    //const series = series ;
    //console.log(  this.state);
    //indexBy(series, 'season');
    //arr.map((e) => (this.setState({ openNested: !this.state.open });));

    if (classes){
    return (
      <List className={classes.root} subheader={<ListSubheader>Liste des Episodes</ListSubheader>}>
        {this.state.number.map((season,t) => (
              <Saison key={Object.keys(season)[t]} data = {season} saisonNum = {Number.parseInt(Object.keys(season)[t])}/>
          ))}
      </List>
    );
  };
}
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
