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

export default function Go_Bot_Post() {
  return (
	<React.Fragment>
        <section className="hero hero--single">

        <div className="hero__image" style={{backgroundImage: prefix + "go_bot.gif" + suffix}}>
                <div className="hero__overlay"></div>
        </div>

        <div className="description_summary">
                <h1>Go Bot</h1>
                <p>C++, ROS, Motion Planning, MoveIt</p>
        </div>

	</section>

	<section class="single">

        <div class="wrap">

                <article class="single-post">

                <h2 id="project-overview">Project Overview</h2>
		<p> I moved to Montreal in January of 2021 at the height of covid. I had a lot of time and so I started this fun project. I wanted to operate a robot over a network, and also do some React programming. I decided to build an end to end robotic application. I programmed a RX200 robot to play the board game Go as well as a React frontend to interact with the system. I actually own an RX200 and so will eventually run the software on the real robot. I had some trouble getting the robot to Canada though so for now I can only run it in a Gazebo simulation. I actually have no idea how to strategize well at Go so I haven't been able to beat the AI agent. Someday I'll score a win. </p>

	<h2 id="map-generation">Pick and Place</h2>
	<p> First, I used MoveIt to make a set of ROS services to pick and place Go pieces in Gazebo. I used MoveIt's Cartesian planner in C++. The same software which plans paths to pick and place pieces in Gazebo can easily be used with the real robot. Both the real robot and the Gazebo simulation robot provide a service called /follow_joint_trajectory. My code simply publishes on this topic so as long as there is a ROS node subscribed to this topic to execute the trajectory, the robot will move. This makes testing and debugging much quicker.   
	</p>

	<h2 id="map-generation">Go Game Library</h2>
        <p> The next step was to write a Python library to track and run Go games. I really wanted to use C++ for this but I also wanted to create a reinforcement learning agent on top of this library. Most of the mainstream machine learning libraries are in Python so I decided to use Python. This library makes starting and playing a game of Go simple by providing a high level interface. I used PyTest to write unit and functionality tests.
        </p>


	<h2 id="map-generation">Fast API Backend</h2>
        <p> Once I had a Python library to track the state of a game, I used the FastAPI to provide endpoints to manipulate a game. This takes the Python library another step further as now I can only train AI agents using it, but also allow people to play against the agent over the browser. The FastAPI provides a set of enpoints to start and play a game of Go against the robot from the browser. 
        </p>


	<h2 id="map-generation">React Interface</h2>
	<p> The next step was to write a React interface to display the game in the browser. I used React because I wanted to get a little more experience with it. </p>

	<h2 id="map-generation">Reinforcement Learning Agent</h2>
        <p> The last step was to program a reinforcement learning agent to play against. I haven't finished this part yet but am currently working on it. </p>

	</article>
	</div>
	</section>
	</React.Fragment>

  );
}
