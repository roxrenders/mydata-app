import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Navbar from '../Components/NavigationBar';
import { useNavigate } from 'react-router-dom';
import SubmitConfirmation from './SubmitConfirmation'

function CommonFormPage() {

  const navigate = useNavigate()
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleBack = () => {
    navigate('/createads') };

    const handleNext = () => {
      setShowConfirmation(true);
      setTimeout(() => {
        navigate('/createads');
      }, 600); 
    };
    
  return (
    <>
      <Navbar />
      <Typography variant='h5' align="start" my={3}>
        Create Ads & Media
      </Typography>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: {xs:'column',md:'flex'}, width: '100%'}}>
          <Box sx={{ display: 'grid', width: {xs:"100%",md:'50%'}, paddingRight: '8px',  textAlign:'end', alignContent:'space-between' }}>
            <TextField
              id="Heading 01"
              label="Heading 01"
              placeholder='Add a Heading that would make users interested'
              maxRows={4}
              sx={{  marginX:'10px', marginY:{xs:'5px',md:'0'}}}
            />
            <TextField
              id="Heading 02"
              label="Heading 02"
              placeholder="Add a Heading that would make users interested"
              sx={{ marginX:'10px',marginY:{xs:'5px',md:'0'}}}
            />
            <TextField
              id="Business Name"
              label="Business Name"
              placeholder="Add a Heading that would make users interested"
              sx={{ marginX:'10px',marginY:{xs:'5px',md:'0'}}}
            />
            
          </Box  >
          <Box sx={{ display: 'grid',width:{xs:'100%',md:'50%',} }}>
          <TextField
            id="outlined-multiline-static"
            label="Description 01"
            multiline
            rows={4}
            placeholder='Add a nice Description.'
            sx={{marginBottom:'10px', marginX:{xs:'10px',md:'0'}, marginY:{xs:'5px',md:'0'}}}
            
          />
          <TextField
            id="outlined-multiline-static"
            label="Button Label"
            rows={4}
            placeholder='Add a nice Description.'
            sx={{paddingTop:'10px', marginX:{xs:'10px',md:'0'}, marginY:{xs:'5px',md:'0'}}}
            
          />
          </Box>
        </Box>
      </Box>
        
      
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <TextField
          id="websiteUrl"
          label="websiteUrl"
          placeholder="Add a video URL"
          sx={{ width: {xs:'96%',md:'100%'}, marginY: '10px', marginLeft:{md:'10px'} }}
        />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end',marginRight:{xs:'10px',md:"0"} }}>
        <Button variant="outlined" sx={{ marginX: '10px' }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} >Next</Button>
      </Box>
      {showConfirmation && <SubmitConfirmation />}
    </>
  );
}

export default CommonFormPage;