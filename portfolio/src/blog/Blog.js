import * as React from 'react';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Header from './Header';
import * as my_css from './a.css';
import * as my_css2 from './b.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';

const sections = [];

export default function Blog() {
  return (
	  <div className="page">
	  <div className="page__content" style={{height: "100vh", width: "100vw"}} > 
	  <Header user_name="Peter Jochem" sections={sections}/>
		
	<section className="listing">
        <div className="wrap">
                <article className="post">

                        <div className="post__image-wrap">
                                <div className="post__image" style={{backgroundImage: "url(/image.gif)"}}></div>
                        </div>

                        <div className="post__content-wrap">
                                <div className="post__content">
                                        <h2 className="post__title"><a href="/project/spot-mini-mini">Spot Mini Mini</a></h2>
                                        <p className="post__subtitle">Quadruped Locomotion, Bezier Gait, Reinforcement Learning</p>
                                        <p className="post__description">Developed Pybullet Spot Environment and deployed 12-point Bezier-curve gait as baseline for RL task. Validated on real robot designed and built for under $600.</p>
                                </div>
                        </div>

                </article>
	</div>
	</section>
	
	 </div>
	</div>
	
  );
}
