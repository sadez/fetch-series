import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Search from 'material-ui-icons/Search';
import TemporaryDrawer from './TemporaryDrawer';



function Header(props) {
  return (
    <div className="headerC">
      <AppBar position="fixed">
        <Toolbar>         

            <TemporaryDrawer/>

          <Typography type="title" color="inherit" className="classflex">
            <Link href='/'>
              <Button color="contrast">Mes series</Button>
            </Link>
          </Typography>
            <IconButton className="menuButton" color="contrast" aria-label="Search">
              <Search />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
