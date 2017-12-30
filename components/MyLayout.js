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
  		  }
  		  .classflex {
  			  flex: 2;
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
  			display: block;
  			background-color: #eeeeee ;
  		  }
  		  .paperStyle{
  			//padding-top: 16px;
  			padding-bottom: 16px;
  			padding-left: 5px;
  			padding-right: 5px;
  			background-color: #eeeeee !important;
  			background: #eeeeee;
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
  			background-color: #eeeeee;
  			background: #eeeeee;
  		  }
  		  .cardMediaStyle{
  			height: 350px;
  		  }
  		  .rightIconButton{
  			margin-right : 8px;
  		  }
  		`}</style>
		</div>
	  )
  }
}


export default Layout;
