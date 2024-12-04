import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface ProgressBarProps {
  value: number; // Progress value (0-100)
  label?: string; // Optional label for the progress bar
  color?: string; // Optional color for the progress bar
}

const ProgressBarContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row', // Horizontal layout
  alignItems: 'center',
  width: '100%',
});

const ProgressLabel = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  fontWeight: 'bold',
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  flexGrow: 1,
  height: '10px',
  borderRadius: '5px',
  backgroundColor: theme.palette.grey[300],
}));

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, color }) => {
  return (
    <ProgressBarContainer>
      {label && (
        <ProgressLabel variant="body2">
          {label}
        </ProgressLabel>
      )}
      <StyledLinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: color || 'primary.main',
          },
        }}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
