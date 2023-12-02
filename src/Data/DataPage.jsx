import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TableComp from './TableComp';
import GraphComp from './GraphComp';


function DataPage() {
 
  // fake Data 
  const countries = [
    { id: 1, name: 'USA', gdp: 21000000, population: 331000000, male: 40, female: 60 },
    { id: 2, name: 'China', gdp: 14342903, population: 1444216107, male: 33, female: 67 },
    { id: 3, name: 'India', gdp: 2875140, population: 1393409038, male: 57, female: 43 },
  
  ];
  

  return (
    
      <Grid container spacing={2} sx={{ my: '1rem' }}>
      
       {/* Table */}
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <TableComp data={countries} />
          </Box>
        </Grid>

        {/* Graph  */}
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <GraphComp />
          </Box>
        </Grid>
      </Grid>

  );
}

export default DataPage;
