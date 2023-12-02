import React from 'react';
import { AppBar, Toolbar, Typography, Link, useTheme } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f8f8f8', color: '#001f3f' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>

        <Link component={RouterLink} to="/" color="inherit" underline="none" sx={{ mx: { xs: 1, sm: 2 }, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          DASHBOARD
        </Link>

        <Link component={RouterLink} to="/createads" color="inherit" underline="none" sx={{ mx: { xs: 1, sm: 2 }, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          CREATE ADS
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
