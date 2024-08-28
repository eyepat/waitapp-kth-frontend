import React from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import theme from '../../components/Theme';

interface ChartMeterProps {
  value: number;
  label: any;
  barColor: string;
  lighterColor: string;
  maxValue: number;
}

const ChartMeter: React.FC<ChartMeterProps> = ({
  value,
  label,
  barColor,
  lighterColor,
  maxValue,
}) => {
  const height = `${(value / maxValue) * 100}%`;

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: '100%', maxWidth: '50px' }}
      >
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
        >
          {label}
        </Typography>
        <Box
          sx={{
            width: '1.5vh',
            height: '40vh',
            bgcolor: lighterColor,
            borderRadius: '15px',
            position: 'relative',
            marginTop: '10px',
            maxWidth: '20px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: height,
              bgcolor: barColor,
              borderRadius: 'inherit',
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ChartMeter;
