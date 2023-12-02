import React, { useState, useEffect } from 'react';
import { Divider, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, Button } from '@mui/material';
import { useDataContext } from '../Context/DataContext';

function TableComp({ data }) {
  const { handleItemSelected } = useDataContext();
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setSortedData([...data]);
  }, [data]);

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);

    const sortedDataCopy = [...sortedData].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.population - b.population;
      } else {
        return b.population - a.population;
      }
    });

    setSortedData(sortedDataCopy);
  };

  const getTotal = (property) => {
    return sortedData.reduce((acc, item) => acc + item[property], 0);
  };

  return (
    <Box border={1} borderRadius={2} p={2}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margiX: '5px' }}>
        <Typography variant="h6" component="div">
          Ad Insight
        </Typography>
        <Button variant="h6" component="div" onClick={handleSort}>
          Sort By Population
        </Button>
      </Box>
      <Divider sx={{ width: '100%', marginRight: 2 }} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>GDP</TableCell>
              <TableCell>
                Population{' '}
                <span role="img" aria-label="sort" style={{ cursor: 'pointer' }} onClick={handleSort}>
                  {sortOrder === 'asc' ? '🔼' : '🔽'}
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((item, index) => (
              <TableRow key={item.id} onClick={() => handleItemSelected(item)} style={{ cursor: 'pointer' }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>$ {item.gdp}</TableCell>
                <TableCell>{item.population}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell >Total</TableCell>
              <TableCell>{sortedData.length}</TableCell>
              <TableCell>$ {getTotal('gdp')}</TableCell>
              <TableCell>{getTotal('population')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableComp;
