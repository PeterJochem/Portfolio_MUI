import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState, useEffect } from 'react';


function Header(props) {
  const { sections, title } = props;
	
  const [isDesktop, setDesktop] = useState(window.innerWidth > 400);

  const updateMedia = () => {
	setDesktop(window.innerWidth > 400);
  };

  useEffect(() => {
	window.addEventListener("resize", updateMedia);
	return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}  >
        <h1 style = {{color: 'black', width: '60%', float: "left"}}> {props.user_name} </h1>
	
	{isDesktop ? (
	<ButtonGroup variant="" style = {{color: 'black', width: '40%', float: "right"}} aria-label="outlined primary button group">  
		
	<a href="./">
	<Button variant="" size="small" align="right" >
          Projects
        </Button>
	</a>
	<a href="./#/about">
	<Button variant="" size="small" align="right">
          About
        </Button>
	</a>
	<a href="https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/Resume.pdf" target="_blank">
	<Button variant="" size="small" align="right">
          Resume
        </Button>
	</a>
	<a href="https://github.com/PeterJochem" target="_blank">
	<Button size="" align="right">
          <GitHubIcon />
        </Button>
	</a>
	<a href="https://www.linkedin.com/in/peter-jochem-0b6557138/" target="_blank">
	<Button>
          <LinkedInIcon />
        </Button>
	</a>
	</ButtonGroup>
	) : (
		<ButtonGroup variant="" style = {{color: 'black', width: '40%', float: "right"}} aria-label="outlined primary button group">

        <a href="https://raw.githubusercontent.com/PeterJochem/Portfolio/master/src/Resume.pdf">
        <Button variant="" size="small" align="right" >
        	   Resume
        </Button>
	</a>
	</ButtonGroup>
	)}

      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}


export default Header;
