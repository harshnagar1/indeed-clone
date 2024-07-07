import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { routepath } from '../routes/route';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#19565F',
  height: 50,
  '& > div > *': {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: 20,
    fontsize: 14,
  },
});

const Header = () => {
  const logo =
    'https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png';
  return (
    <StyledAppBar>
      <Toolbar>
        <Link to={routepath.Home}>
          <img src={logo} alt="logo" style={{ width: 95, marginBottom: 8 }} />
        </Link>
        <Link to={routepath.create}>PostaJob</Link>
        <Link to={routepath.posts}>FindJobs</Link>
      </Toolbar>
    </StyledAppBar>
  );
};
export default Header;
