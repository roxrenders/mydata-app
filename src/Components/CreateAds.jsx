import React, { useState } from 'react';
import { Box, Button, Checkbox, Divider, FormControlLabel, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const CreateAds = () => {
  const navigate = useNavigate();
  const [selectedCarousels, setSelectedCarousels] = useState([]);

  const handleCarouselSelect = (carouselName) => {
    const updatedSelection = [...selectedCarousels];

    if (updatedSelection.includes(carouselName)) {
      updatedSelection.splice(updatedSelection.indexOf(carouselName), 1);
    } else {
      updatedSelection.push(carouselName);
    }

    setSelectedCarousels(updatedSelection);
  };

  const handleFormSubmit = () => {
    if (selectedCarousels.length === 1) {
      navigate(`/form${selectedCarousels[0].slice(-1)}`);
    } else if (selectedCarousels.length > 1) {
      navigate('/commonform');
    } else {
      alert('Please select at least one carousel before submitting.');
    }
  };

  return (
    <>
      <NavigationBar />
      <Box sx={{ padding: { xs: 2, md: 4 } }}>
        <Typography variant="h5" sx={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start' }}>
          Create Ads
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: '20px',
            margin: '40px',
          }}
        >
          {/* Carousel 1 content */}
          <Box
            sx={{
              border: '1px solid #ddd',
              padding: '30px',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'grid',
              justifyContent: 'center',
              position: 'relative',
              width: { xs: '80%', md: '25%' },
            }}
            onClick={() => handleCarouselSelect('carousel1')}
          >
            <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCarousels.includes('carousel1')}
                    onChange={() => handleCarouselSelect('carousel1')}
                  />
                }
              />
            </Box>
            <img
              src="https://cdn.pixabay.com/photo/2021/09/05/17/26/video-6600037_1280.png"
              alt="Carousel 2 Image"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <Divider sx={{ width: '100%', marginRight: 2, marginTop: 2 }} />
            <Typography variant="h6">Text Ad</Typography>
          </Box>

          {/* Carousel 2 content */}
          <Box
            sx={{
              border: '1px solid #ddd',
              padding: '30px',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'grid',
              justifyContent: 'center',
              position: 'relative',
              width: { xs: '80%', md: '25%' },
            }}
            onClick={() => handleCarouselSelect('carousel2')}
          >
            <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCarousels.includes('carousel2')}
                    onChange={() => handleCarouselSelect('carousel2')}
                  />
                }
              />
            </Box>
            <img
              src="https://cdn.pixabay.com/photo/2021/09/05/17/26/video-6600037_1280.png"
              alt="Carousel 2 Image"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <Divider sx={{ width: '100%', marginRight: 2, marginTop: 2 }} />
            <Typography variant="h6">Media Ad</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button variant="contained" onClick={handleFormSubmit} disabled={selectedCarousels.length === 0}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateAds;
