import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { partie1MenuDrawer, partie2MenuDrawer } from './tileData';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {

    this.setState({
      [side]: open,
    });
  };
  toggleDDrawer = (side, open) => () => {
    console.log("terma");
    this.setState({
      [side]: open,
    });
  };


  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{partie1MenuDrawer}</List>
        <Divider />
        <List>{partie2MenuDrawer}</List>
      </div>
    );

    return (
      <div onClick={this.toggleDrawer('left', !this.state.left)}>
        <Button dense color="contrast" onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div tabIndex="0" role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDDrawer('left', false)} >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
