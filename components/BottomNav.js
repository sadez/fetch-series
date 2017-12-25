import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import AppBar from 'material-ui/AppBar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';



class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
	<div>
		<BottomNavigation
			value={value}
			onChange={this.handleChange}
			showLabels
			className='fixBottom'>
			<BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
			<BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
		 </BottomNavigation>
		<style jsx global>{`		  
		  .fixBottom{
			width: 100%;
			top: 90%;
			left: auto;
			position: fixed;
		  }
		`}
		</style>	
	</div>
      

    );
  }
}

export default SimpleBottomNavigation;
