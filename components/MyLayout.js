import React, { Component } from 'react';
import Header from './Header';
import SimpleBottomNavigation from './BottomNav';
import { withStyles } from 'material-ui/styles';

class Layout extends Component {

	constructor (props) {
		super(props)
		this.state = {
		  data:{}
		};
  };

  render(){
	  return(
		<div className="layoutStyle" >
			  <Header/>
			  <div className="paperStyle" >
				{this.props.children}
			  </div>
			  <SimpleBottomNavigation/>

			<style jsx global>{`
  		  body{
  			margin : 0px;
				padding: 0;
				height: 100%;
  		  }
				html{
				    min-height:100%;/* make sure it is at least as tall as the viewport */
				    position:relative;
				}
  		  .classflex {
					flex: 1;
			    justify-content: flex-end;
			    //align-items: right;
  		  }
  		  .headerC: {
  			width: '100%';
  		  }
  		  .menuButton: {
  			margin-left: -12px;
  			margin-right: 20px;
  		  }
  		  .layoutStyle{
	  			padding-top: 64px;
					//padding-bottom: 110px;
					min-height: -moz-available;
					min-height: -webkit-fill-available;
	  			display: block;
					height: 100%;
	  			background-color: #eeeeee ;
					//position:absolute;
			    top:0;
			    bottom:0;
			    left:0;
			    right:0;
			    overflow:hidden;
			    z-index:-1; /* Remove this line if it's not going to be a background! */
					background-image: url('./static/wallpaper.png');

  		  }
  		  .paperStyle{
  			//padding-top: 16px;
  			padding-bottom: 50px;
  			padding-left: 5px;
  			padding-right: 5px;
  			//background-color: #eeeeee !important;
  			//background: #eeeeee;
  		  }
  		  .cardStyle{
  			max-width : 500px;
  			//min-width : 45%;
  			//margin-top: 20px;
  			margin-right: 20px;
  			margin-bottom: 8px;
  			margin-left: 20px;
  			width : 95%;
  		  }
  		  .listStyle{
  			//padding: 16px;
  			padding-left: 0px;
  			padding-right: 0px;
  			display: flex;
  			//justify-content: center;
  			align-items: center;
  			flex-direction: column;
  			//background-color: #eeeeee;
  			//background: #eeeeee;
  		  }
  		  .cardMediaStyle{
  				height: 350px;
					height: 140px;
  		  }
  		  .rightIconButton{
  			margin-right : 8px;
  		  }
				.aboutImg {
				    width: 100%;
				    height: auto;
				}
				.searchBar{
			    padding-left: 5px;
    			padding-right:  15px;
				}
				.
  		`}</style>
		</div>
	  )
  }
}


export default Layout;
