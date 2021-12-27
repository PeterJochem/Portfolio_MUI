import * as React from 'react';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Header from './Header';
import * as my_css from './a.css';
import * as my_css2 from './b.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import Box from '@material-ui/core/Box';


const sections = [];

export default function Blog() {
  return (
	  <div className="page">
	  <div className="page__content" style={{height: "100vh", width: "100vw"}} > 
	  
	  <Box m={5} pt={1}>
	  <Header user_name="Peter Jochem" sections={sections}/>
	  </Box>	

	<section className="listing">
        <div className="wrap">
                <article className="post">

                        <div className="post__image-wrap">
                                <div className="post__image" style={{backgroundImage: "url(/image.gif)"}}></div>
                        </div>

                        <div className="post__content-wrap">
                                <div className="post__content">
                                        <h2 className="post__title"><a href="/project/spot-mini-mini">Go Bot</a></h2>
                                        <p className="post__subtitle">Reinforcement Learning, ROS, MoveIt, FastAPI, React</p>
                                        <p className="post__description">Developed reinforcement learning go playing robot. Robot can play over a network in either Gazbo or the real world.</p>
                                </div>
                        </div>

                </article>
	</div>
	</section>
	
	 </div>
	</div>
	
  );
}
