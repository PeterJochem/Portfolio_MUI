import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {
  const { post } = props;

  return (
	  <div style={{height: "100%", width: "100%", margin:"auto"}}>
        
	   <Card style={{height: "50%", width: "50%", background: "white", margin: "auto"}} >
	  	 <img width="50%" height="100%" src="https://github.com/PeterJochem/Go_Bot/blob/master/media/pick_place_demo.gif?raw=true" alt="" />
		
	    	<Card raised="True" style={{height: "35%", width: "30%", background:"white", position: "absolute", top: "20%", "left": "44%"}} />
	  
	  </Card>
		



	  </div>
  );
}

export default FeaturedPost;
