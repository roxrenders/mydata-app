import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Divider, Grid, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useDataContext } from '../Context/DataContext';

const GraphComp = () => {
  const { selectedItem } = useDataContext();
  const [showChart, setShowChart] = useState(true);

  const [initialChartData, setInitialChartData] = useState({
    labels: [],
    series: [],
  });

  useEffect(() => {
    if (selectedItem) {
      setInitialChartData({
        labels: ['Male', 'Female'],
        series: [selectedItem.male, selectedItem.female],
      });
    }
  }, [selectedItem]);

  const chartData = {
    labels: selectedItem ? ['Male', 'Female'] : [],
    series: selectedItem ? [selectedItem.male, selectedItem.female] : [],
  };

  const options = {
    chart: {
      type: 'donut',
    },
    labels: chartData.labels,
  };

  const handleToggleChange = () => {
    setShowChart(!showChart);
  };

  return (
    <Box border={1} borderRadius={2} p={2} height={300} position="relative">
      <Typography variant="h6" component="div" sx={{ textAlign: 'start' }}>
        Ad Insight
      </Typography>

      <Divider sx={{ width: '100%', marginRight: 2 }} />

      {showChart ? (
        <ReactApexChart options={options} series={chartData.series} type="donut" height={250} />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell>Percentage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Male</TableCell>
                <TableCell>{selectedItem ? selectedItem.male : 0}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Female</TableCell>
                <TableCell>{selectedItem ? selectedItem.female : 0}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Grid container justifyContent="flex-end" alignItems="center"  sx={{ position: 'absolute', bottom: 0, right: 0, p: 2 }}>
        <Grid item>
          <Typography variant="body2" component="div">
          </Typography>
        </Grid>
        <Grid item>
          <Switch checked={showChart} onChange={handleToggleChange} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraphComp;
