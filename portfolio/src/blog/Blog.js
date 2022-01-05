import * as React from 'react';
import * as my_css from './a.css';
import * as my_css2 from './b.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header';
import Box from '@material-ui/core/Box';
import Posts from './Posts.js'; 
import DetailedPost from './DetailedPost.js';

const sections = [];

export default function Blog() {
  return (
	  <div className="page">
	  <div className="page__content" style={{height: "100vh", width: "100vw"}} > 
	  
	  {/* <Box m={5} pt={1}> */}
	  <Header user_name="Peter Jochem" sections={sections}/>
	  {/* </Box> */}	

	{/*
	<section className="listing">
        <div className="wrap">
	  		
	  		{Posts.map((post) =>  {
        		return (
				<article className="post">
                		<div className="post__image-wrap">
                               	<div className="post__image" style={{backgroundImage: post.dynamicImage}}></div>
                        	</div>

                        <div className="post__content-wrap">
                                <div className="post__content">
                                        <h2 className="post__title"><a href=""> {post.title} </a></h2>
                                        <p className="post__subtitle">{post.subtitle}</p>
                                        <p className="post__description">{post.description}</p>
                                </div>
                        </div>			
                	</article>
			)
        		}
		        )}

	</div>
	</section>
	*/}
	<DetailedPost/>	

	</div>
	</div>
	
  );
}
