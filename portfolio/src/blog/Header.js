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


function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} fullWidth="True">
        <h1 style = {{color: 'black', width: '60%', float: "left"}}> {props.user_name} </h1>
       	 
	<ButtonGroup variant="" style = {{color: 'black', width: '40%', float: "right"}} aria-label="outlined primary button group" fullWidth="True">  
	
	<Button variant="" size="small" align="right" >
          Projects
        </Button>
	<Button variant="" size="small" align="right">
          About
        </Button>
	<Button variant="" size="small" align="right">
          Resume
        </Button>
	<Button size="" align="right">
          <GitHubIcon />
        </Button>
	<Button>
          <LinkedInIcon />
        </Button>

	</ButtonGroup>


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

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
