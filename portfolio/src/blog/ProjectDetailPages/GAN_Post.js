import * as React from 'react';
import * as my_css from '../css/a.css';
import * as my_css2 from '../css/b.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from '../Header';
import Box from '@material-ui/core/Box';
import Posts from '../Posts.js'; 

const sections = [];
let prefix = "url(https://raw.githubusercontent.com/PeterJochem/Portfolio_MUI/main/portfolio/public/images/"
let suffix = ")"

export default function GAN_Post() {
  return (
	<React.Fragment>
        <section className="hero hero--single">

        <div className="hero__image" style={{backgroundImage: prefix + "GAN_downsampled.gif" + suffix}}>
                <div className="hero__overlay"></div>
        </div>

        <div className="description_summary">
                <h1>Generative Adversarial Networks</h1>
                <p>Tensorflow, Machine Learning</p>
        </div>

	</section>

	<section class="single">

        <div class="wrap">

                <article class="single-post">

                <h2 id="project-overview">Project Overview</h2>
		<p> </p>

	<h2 id="map-generation">Pick and Place</h2>
	<p></p>

	</article>
	</div>
	</section>
	</React.Fragment>

  );
}
