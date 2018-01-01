import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Search from 'material-ui-icons/Search';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textFieldRoot: {
    padding: 15,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    background: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

function InputSearch(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Search/>
      <TextField
        type="search"
        defaultValue="Search ..."
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      ></TextField>
    </div>
  );
}

export default withStyles(styles)(InputSearch);
