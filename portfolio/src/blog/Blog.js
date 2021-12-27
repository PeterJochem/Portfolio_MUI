import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [];

const mainFeaturedPost = {
  title: 'Go Bot',
  description:
    "5 DOF robot plays Go in Gazebo and real life",
  image: 'https://github.com/PeterJochem/Go_Bot/blob/master/media/pick_place_demo.gif?raw=true',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Navigation Stack From Scratch',
    date: 'Summer 2020',
    description:
      'Built the navigation software for a Turtlebot3',
    image: 'https://github.com/PeterJochem/Turtlebot_Navigation/raw/master/images/pentagon.gif',
    imageLabel: 'Image Text',
  },
  {
    title: 'Navigation Stack From Scratch',
    date: 'Summer 2020',
    description:
      'Built the navigation software for a Turtlebot3',
    image: 'https://github.com/PeterJochem/Turtlebot_Navigation/raw/master/images/pentagon.gif',
    imageLabel: 'Image Text',
  },
  {
    title: 'Building a Deep RL Library',
    date: 'Fall 2020',
    description:
      'Implemented a smorgrasbord of deep reinorcement learning algorithms and OpenAI gym enviroments',
    image: 'https://raw.githubusercontent.com/PeterJochem/Deep_RL/master/DDPG/media/hopper_learned_policy_cropped.gif',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header user_name="Peter Jochem" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
      
        </main>
      </Container>	  
	  
	  {/* <Footer description="" /> */}	  
    </ThemeProvider>
  );
}
