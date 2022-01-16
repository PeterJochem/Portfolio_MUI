import * as React from 'react';
import * as my_css from '../a.css';
import * as my_css2 from '../b.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from '../Header';
import Box from '@material-ui/core/Box';
import Posts from '../Posts.js'; 

const sections = [];

export default function TBot_Nav_Post() {
  return (
	<React.Fragment>
        <section className="hero hero--single">

        <div className="hero__image" style={{backgroundImage: "url(/images/turtle_bot_pentagon.gif)"}}>
                <div className="hero__overlay"></div>
        </div>

        <div className="wrap">
                <h1>ROS Navigation From Scratch</h1>
                <p>C++, ROS, Odometry, SLAM</p>
        </div>

	</section>

	<section class="single">

        <div class="wrap">

                <article class="single-post">

                <h2 id="project-overview">Project Overview</h2>
		<p> This is a navigation stack from scratch implemented in ROS for a differential drive robot. The software can operate a robot in Gazebo or on real hardware. I deployed the software onto a Turtlebot3. I am currently working on implementing Feature-Based Kalman Filtering SLAM. For the moment, I am using ROS's gmapping package. </p>

	<h2 id="map-generation">Odometry</h2>
	<p> The first major step of this project was creating a C++ library for representing 2D rigid body transformations. I used screw theory as presented in <a href="http://hades.mech.northwestern.edu/images/7/7f/MR.pdf"> Modern Robotics </a> for 2D frames. The main purpose of this library is to enable us to convert to and from the robot's encoder data and it's rigid body transformations. For example, given that we observed a certain number of encoder ticks per unit time on each wheel, what is the twist that we underwent. What is the SE(2) transformation we will undergo if we follow that for a unit of time? It also lets us take a desired twist and compute what velocities to set for each wheel in order to make the robot follow the given twist in a unit of time. This library facilitates odometry calculations so that higher levels of the navigation stack can abstract them. </p>


	<h2 id="map-generation">Gazebo Simulation</h2>
	<p>I wrote a plugin for Gazebo to simulate my differential drive robot. This allows me to iterate faster and avoid using the robot. The plugin listens for wheel commands that are normally sent to the real robot's motors and uses them to update the simulated robot's wheel velocities. The plugin also simulates the encoder and laser data normally published by the real robot. This allows us to have a pretty realistic and dynamic simulation of the robot and its enviroment.

Below is a video of the robot navigating to waypoints in gazebo using a feedback controller. It also shows RVIZ which displays the robot's internal odometry data. This is where the robot thinks it is. The coordinate axes are not aligned but you can still see that over time, the robot's actual position (the Gazebo simulation) drifts from the idealized position in RVIZ. The RVIZ robot finishes the pentagon at almost exactly the same point it started at. This is visualized by the blue dots. In contrast, the Gazebo robot starts at the origin and finishes about a quarter meter from the origin. This is due to the dynamics of the simulation. RVIZ simply displays the odometry data from the robot. These are purely kinematic calculations. The odometry calculations do not model the robot's inertia, the frictional forces in the enviroment, or any other dynamic quality. Maybe a future iteration could incorporate these types of dynamics in order to obtain better state estimations. In contrast, the Gazebo simulation captures these dynamics and results in a realistic simulation of the robot running in real life. The blue ring is the simulated laser data. </p>

	<h2 id="map-generation">SLAM</h2>
	<p> After I graduate, I want to implement Feature-Based Kalman Filtering SLAM on the Turtlebot. In the meantime, I have been using ROS's gmapping package for my SLAM. Below is an image of my Turtlebot running GMapping. A video of the robot navigating to a series of waypoints can be found <a href="https://www.youtube.com/watch?v=un_52ommASM"> here </a> </p>

	  <h2 id="map-generation">Doxygen</h2>
	  <p> I also used Doxygen to generate documentation of files, classes, and methods. The Doxygen documentation is available <a href="https://peterjochem.github.io/Turtlebot_Navigation/html/annotated.html"> here </a>. </p>


	</article>
	</div>
	</section>
	</React.Fragment>

  );
}
