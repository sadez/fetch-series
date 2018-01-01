import React from 'react';
import { groupBy } from 'underscore'
//mui imports
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List from 'material-ui/List';
//local imports
import series from '../utils/series.json'
import Saison from './Saison'


const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

const seasons  = groupBy(series, 'season');
//component which list seasons of a serie show
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

export default withStyles(styles)(NestedList);
