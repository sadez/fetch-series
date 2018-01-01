import React, { Component } from 'react';
import Star from 'material-ui-icons/Star';

//component to render rating of a show
class Stars extends Component {

  render(){
    var getNumberStarts = function(decimalRating){
      if(decimalRating <= 2 )
        return 1;
      if(decimalRating <= 4 )
        return 2;
      if(decimalRating <= 6 )
        return 3;
      if(decimalRating <= 8 )
        return 4;
      if(decimalRating <= 9 )
        return 4;
      if(decimalRating <= 10 )
        return 5;
    };

    const { average } = this.props;

    if(average){
      return(
        <div>
          <Star color={getNumberStarts(average) >=1 ? 'accent' : 'primary'}></Star>
          <Star color={getNumberStarts(average) >=2 ? 'accent' : 'primary'}></Star>
          <Star color={getNumberStarts(average) >=3 ? 'accent' : 'primary'}></Star>
          <Star color={getNumberStarts(average) >=4 ? 'accent' : 'primary'}></Star>
          <Star color={getNumberStarts(average) >=5 ? 'accent' : 'primary'}></Star>
        </div>
      );
    }
    else{
      return(
        <div>
        <Star></Star>
        </div>
      );
    }
  }
}



export default Stars;
