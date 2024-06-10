import React from 'react';
import { Box, Typography } from '@mui/material';

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
  const height = `${(value / maxValue) * 300}px`;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="body1" color="textSecondary">
        {label}
      </Typography>
      <Box
        width="15px"
        height="400px"
        bgcolor={lighterColor}
        borderRadius="15px"
        position="relative"
        marginTop="10px"
      >
        <Box
          position="absolute"
          bottom="0"
          width="100%"
          height={height}
          bgcolor={barColor}
          borderRadius="inherit"
        />
      </Box>
    </Box>
  );
};

export default ChartMeter;
