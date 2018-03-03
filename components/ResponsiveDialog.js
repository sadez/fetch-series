import React from 'react';
import Button from 'material-ui/Button';
import Router from 'next/router'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import ExitToApp from 'material-ui-icons/ExitToApp';



class ResponsiveDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogout = () => {
    this.setState({ open: false });
    Router.push({pathname: '/auth/logout'})
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <MenuItem onClick={this.handleClickOpen}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText inset primary="Logout" />
        </MenuItem>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Disconnect from my series?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you realy want to Logout from this awesome App ? :|
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleLogout} color="primary">
              Yes
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default withMobileDialog()(ResponsiveDialog);
