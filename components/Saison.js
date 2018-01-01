import React from 'react';
//mui imports
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Movie from 'material-ui-icons/Movie';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';



const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

//add zero 1=>01
function n(n){
  return n > 9 ? "" + n: "0" + n;
};

//Component listing episodes of a season with collapse system
class Saison extends React.Component {

//json de la saison
//nombre

  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render(){

    const { data } = this.props; // data of a season
    const { classes } = this.props;

    return(
      <div>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <Movie />
            </ListItemIcon>
            <ListItemText inset primary={`Saison  ${this.props.saisonNum + 1}`} />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
            <List disablePadding>
            {this.props.data && this.props.data.map((episode) => (
              <ListItem  button dense className={classes.nested} key={episode.id}>
                <ListItemText  secondary={episode ? 'S'+n(episode.season)+'E'+n(episode.number) : 'none' }  primary ={episode ? episode.name : 'none'} />
              </ListItem>
            ))}
            </List>
          </Collapse>
        </div>
    );
  }
}

export default withStyles(styles)(Saison);
