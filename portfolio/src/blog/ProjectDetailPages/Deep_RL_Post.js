import * as React from 'react';
import * as my_css from '../a.css';
import * as my_css2 from '../b.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from '../Header';
import Box from '@material-ui/core/Box';
import Posts from '../Posts.js'; 
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
        root: {
                flexGrow: 1
        },
        paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary
                }

        });

const sections = [];

const Post = withStyles(styles) (({ classes }) => {
  return (
	<React.Fragment>
        <section className="hero hero--single">
        <div className="hero__image" style={{backgroundImage: "url(/images/hopper_learned_policy.gif)"}}>
                <div className="hero__overlay"></div>
        </div>

        <div className="wrap">
                <h1>Deep Reinforcement Learning</h1>
                <p>Tensorflow, Keras, Python, PyBullet, Robotics</p>
        </div>
	</section>

	<section class="single">
        <div class="wrap">
                <article class="single-post">
                <h2 id="project-overview">Project Overview</h2>
		<p> This is a collection of deep reinforcement learning algorithms implemented with Tensorflow2 and Keras. I think deep reinforcement learning has a lot of promise for robotic manipulation and just find it fascinating. So far, I have implemented Deep Q Learning (DQN), Double Deep Q Learning (DDQN), Deep Deterministic Policy Gradients (DDPG), and TD3. I also created a few custom OpenAI gym environment of a hopping robot on soft ground. </p>
	
	<h2 id="map-generation"> Implementing Algorithms </h2>
	<p> I read a bunch of papers for discrete and continuous deep rl control. Add a pic of the results </p>
	
	<div className={classes.root}>
                <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={6} >
                        <Paper className={classes.paper} >
                                <img src="https://github.com/PeterJochem/Deep_RL/raw/master/DDPG/media/hopper_learned_policy.gif" />
                                <p> DDPG with OpenAI Hopper </p>
                        </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                        <Paper className={classes.paper} >
                                <img src="https://github.com/PeterJochem/Deep_RL/raw/master/DDPG/media/cheetah2.gif" />
                                <p> DDPG with OpenAI Cheetah </p>
                        </Paper>
                </Grid>
                </Grid>
          </div>

		
	<h2 id="map-generation"> Custom OpenAI Gyms in PyBullet </h2>
        <p> I created my own custom gym environment in PyBullet. I wanted to simulate a hopping robot walking on soft ground. PyBullet does not support granular materials in this sense so I simulated the robot's foot interacting with granular materials in Chrono, gathered a dataset, and trained a neural network to map the robot's state to the ground reaction forces and moments of torque. I then used this neural network to apply forces and torques on the robot's foot as it interacted with the bed of granular material. I still need to add a way to visualize where in space the granular material is. Below is a gif of the robot in its home position. A video of the robot hopping can be found here. More details can be found in the h3pper directory. </p>
	
	<div className={classes.root}>
                <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={6} >
                        <Paper className={classes.paper} >
                                <img src="https://github.com/PeterJochem/Deep_RL/raw/master/DDPG/media/ddpg_pybullet_hopper_on_sand.gif" />
                                <p> Custom PyBullet Environment </p>
                        </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                        <Paper className={classes.paper} >
                                <img src="https://github.com/PeterJochem/Deep_RL/raw/master/DDPG/media/DDPG_h3pper_3.png" />
                                <p> Reward Per Epoch over Time </p>
                        </Paper>
                </Grid>
                </Grid>
          </div>

	
	</article>
	</div>
	</section>
	</React.Fragment>

  );
}
)

export default Post;
