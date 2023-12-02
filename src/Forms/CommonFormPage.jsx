import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Navbar from '../Components/NavigationBar';
import { useNavigate } from 'react-router-dom';
import SubmitConfirmation from './SubmitConfirmation';

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
      <Typography variant='h5' align='start' my={3}>
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
        <Box sx={{ display: 'flex', flexDirection:{xs:'column',md:'row'}, width: '100%' }}>
          <Box sx={{ display: 'grid', width: {xs:'100%', md:'50%'},marginY:{xs:'10px',md:'0'}, paddingRight: '8px', textAlign:'end', alignContent:'space-between' }}>
            <TextField
              id="Heading 01"
              label="Heading 01"
              placeholder='Add a Heading that would make users interested'
              maxRows={4}
              sx={{  marginX:'10px',marginY:{xs:'10px',md:'0'}}}
            />
            <TextField
              id="Heading 02"
              label="Heading 02"
              placeholder="Add a Heading that would make users interested"
              sx={{ marginX:'10px'}}
            />
          </Box>
          <TextField
            id="outlined-multiline-static"
            label="Description 01"
            multiline
            rows={4}
            placeholder='Add a nice Description.'
            sx={{ width: {xs:'96%', md:'50%'}, paddingRight:'8px',marginX:{xs:'10px',md:'0'} }}
          />
        </Box>
      </Box>
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
        <Box sx={{ display: {xs:'table-column', md:'flex'}, width: '100%', justifyContent:"space-around" }}>
            <TextField
              id="Landscape"
              label="LandScape Marketing Image(1:9:1)"
              placeholder='Add a image that would make users interested'
              maxRows={4}
              sx={{ width: {xs:'96%', md:'50%'},marginX:'10px',marginY:'10px' }}
            />
            <TextField
              id="Portrait"
              label="Portrait Marketing Image"
              placeholder="Add a image that would make users interested"
              sx={{width: {xs:'96%', md:'50%'},marginX:'10px' ,marginY:'10px' }}
            />
            <TextField
              id="Square"
              label="Square Marketing Image"
              placeholder="Add a Image that would make users interested"
              sx={{ width: {xs:'96%', md:'50%'},marginX:'10px',marginY:'10px' }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <TextField
          id="videoUrl"
          label="videoUrl"
          placeholder="Add a video URL"
          sx={{ width: '100%', margin: '10px' }}
        />
        </Box>
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
        <Box sx={{ display: 'flex', width: '100%', justifyContent:"space-around" }}>
            <TextField
              id="Business Name"
              label="Business Name"
              placeholder='Add a name that would make users interested'
              maxRows={4}
              sx={{ width: '100%',marginX:'10px',marginY:'10px' }}
            />
            <TextField
              id="Button Label"
              label="Button Label"
              placeholder="Add a Heading that would make users interested"
              sx={{ width: '100%',marginX:'10px' ,marginY:'10px' }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <TextField
          id="websiteUrl"
          label="websiteUrl"
          placeholder="Add a video URL"
          sx={{ width: '100%', margin: '10px' }}
        />
        </Box>
        <Box sx={{display:'flex', justifyContent:'flex-end', marginRight:{xs:'10px'} }}>
        <Button variant="outlined" sx={{ marginX: '10px' }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>Next</Button>
        </Box>
        {showConfirmation && <SubmitConfirmation />}
    </>
  );
}

export default CommonFormPage;