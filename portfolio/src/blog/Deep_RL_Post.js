import * as React from 'react';
import * as my_css from './a.css';
import * as my_css2 from './b.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header';
import Box from '@material-ui/core/Box';
import Posts from './Posts.js'; 

const sections = [];

export default function Deep_RL_Post() {
  return (
	<React.Fragment>
        <section className="hero hero--single">

        <div className="hero__image" style={{backgroundImage: "url(/images/hopper_learned_policy.gif)"}}>
                <div className="hero__overlay"></div>
        </div>

        <div className="wrap">

                <h1>Go Bot</h1>
                <p>C++, ROS, Motion Planning, MoveIt</p>
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
