import React from 'react';
import { Link } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Video Learning Platform
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Courses
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
