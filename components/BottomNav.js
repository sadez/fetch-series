import React from 'react';
//next imports
import Link from 'next/link';
import Router from 'next/router'
//mui imports
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Info from 'material-ui-icons/Info';
import Movie from 'material-ui-icons/Movie';
import Search from 'material-ui-icons/Search';

// component for Bottom navigation with three paths : home , searchPage and about
class SimpleBottomNavigation extends React.Component {

  // state value is the active nav , zero by default
  constructor(props){
    super(props);
    this.state = {value: 0};
  };


  componentDidMount() {
    //check from url to know the active nav
    if(Router.pathname == '/about'){
      this.setState({value: 2});
    }
    else if (Router.pathname == '/searchPage') {
      this.setState({value: 1});
    }else{
      this.setState({value: 0});
    }
  }

//routing after click
  handleChange = (event, value) => {
    this.setState({ value });
    if(value==2){
      Router.push({pathname: '/about'})
    }
    if(value==1){
      Router.push({pathname: '/searchPage'})
    }
    if(value==0){
      Router.push({pathname: '/'})
    }
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
    			<BottomNavigationButton label="Favourite show" icon={<Movie />} />
    			<BottomNavigationButton label="Search" icon={<Search />} />
    			<BottomNavigationButton label="About" icon={<Info />} />
    		 </BottomNavigation>
    		<style jsx global>{`
    		  .fixBottom{
    			width: 100%;
          bottom: 0;
    			left: auto;
    			position: fixed;
          z-index: 1100;
    		  }
          @media (min-width: 1000px){
          }
    		`}
    		</style>
    	</div>
    );
  }
}

export default SimpleBottomNavigation;
