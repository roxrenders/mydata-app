import React from 'react';
import { Backdrop, Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SubmitConfirmation = () => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
      }}
      open={true} 
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white', 
          padding: {xs:'20px',md:'40px'},
          borderRadius: '20px',
          boxShadow: 8, 
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: {xs:20,md:40}, color: 'blue' }} />
        <Typography variant="h4" color="black" sx={{fontSize:{xs:'20px',md:'40px'}}}>
          Submitted
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default SubmitConfirmation;
