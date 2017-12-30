import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Search from 'material-ui-icons/Search';
import MoreVert from 'material-ui-icons/MoreVert';
import TemporaryDrawer from './TemporaryDrawer';


// We can use inline-style
const style = {
  paddingLeft: '5px',
  paddingRight: '5px',
};

function Header(props) {
  return (
    <div className="headerC">
      <AppBar position="fixed" >
        <Toolbar style={style} >
          <TemporaryDrawer/>
          <Typography type="title" color="inherit" className="classflex">
            <Link href='/'>
              <Button color="contrast">My series</Button>
            </Link>
          </Typography>
            <IconButton className="menuButton" color="contrast" aria-label="Search">
              <Search />
            </IconButton>
            <IconButton className="menuButton" color="contrast" aria-label="Search">
              <MoreVert/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
