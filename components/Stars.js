
import React, { Component } from 'react';
import Star from 'material-ui-icons/Star';



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


    return(
      <div>
        <Star color={getNumberStarts(average) >=1 ? 'accent' : ''}></Star>
        <Star color={getNumberStarts(average) >=2 ? 'accent' : ''}></Star>
        <Star color={getNumberStarts(average) >=3 ? 'accent' : ''}></Star>
        <Star color={getNumberStarts(average) >=4 ? 'accent' : ''}></Star>
        <Star color={getNumberStarts(average) >=5 ? 'accent' : ''}></Star>
      </div>
    );
  }
}



export default Stars;
