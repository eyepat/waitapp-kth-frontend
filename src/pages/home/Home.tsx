import React, { useEffect, useState } from 'react';
import { Stack, ThemeProvider, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import theme from '../../components/Theme';
import { useAuth } from '../../contexts/AuthContext';
import Todo from './Todo';
import ActiveSprintCard from '../../components/Cards/MotivationCard';
import {
  useBloodPressureContext,
  useWaistSizeContext,
  useWeightContext,
} from '../../contexts/MetricsContext';
import {
  BloodPressureDTO,
  WaistSizeDTO,
  WeightDTO,
} from '../../api/BaseClient';

const Home: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [latestWeight, setLatestWeight] = useState<number | null>(null);
  const [latestWaistSize, setLatestWaistSize] = useState<number | null>(null);
  const [latestBloodPressure, setLatestBloodPressure] = useState<string | null>(null);
  const [systolic, setSystolic] = useState<number | null>(null);
  const [diastolic, setDiastolic] = useState<number | null>(null);
  
  const { t } = useLanguage();
  const { user } = useAuth();
  
  // Get metrics contexts
  const { getResources: getBPs, resources: bpResources } = useBloodPressureContext();
  const { getResources: getWeights, resources: weightResources } = useWeightContext();
  const { getResources: getWaistSizes, resources: waistSizeResources } = useWaistSizeContext();

  // Fetch all metrics data when component mounts
  useEffect(() => {
    getBPs();
    getWeights();
    getWaistSizes();
  }, []);

  // Process and set the latest weight data
  useEffect(() => {
    if (weightResources && weightResources.length > 0) {
      // Sort by timestamp in descending order to get the most recent entry
      const sortedWeights = [...weightResources].sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      
      // Get the latest weight value
      const latest = sortedWeights[0] as WeightDTO;
      setLatestWeight(latest.value ? Number(latest.value) : null);
    }
  }, [weightResources]);

  // Process and set the latest waist size data
  useEffect(() => {
    if (waistSizeResources && waistSizeResources.length > 0) {
      // Sort by timestamp in descending order to get the most recent entry
      const sortedWaistSizes = [...waistSizeResources].sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      
      // Get the latest waist size value
      const latest = sortedWaistSizes[0] as WaistSizeDTO;
      setLatestWaistSize(latest.value ? Number(latest.value) : null);
    }
  }, [waistSizeResources]);

  // Process and set the latest blood pressure data
  useEffect(() => {
    if (bpResources && bpResources.length > 0) {
      // Sort by timestamp in descending order to get the most recent entry
      const sortedBPs = [...bpResources].sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      
      // Get the latest blood pressure value
      const latest = sortedBPs[0] as BloodPressureDTO;
      
      if (latest.value) {
        setLatestBloodPressure(latest.value);
        
        // Extract systolic and diastolic values
        const sys_diast = latest.value.split('/');
        setSystolic(Number(sys_diast?.[0] || -1));
        setDiastolic(Number(sys_diast?.[1] || -1));
      }
    }
  }, [bpResources]);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: '100%',
          margin: 'auto',
          fontFamily: 'Open Sans',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <Stack direction="row">
          <Stack direction="column" style={{ flex: 1, marginLeft: '6vw' }}>
            <Stack direction="column" spacing={2}>
              <Typography variant="caption" lineHeight={3}>
                {t('latest-result')}
              </Typography>
              
              {/* Weight Display */}
<Stack direction="row" spacing={1} alignItems="center">
  <Typography sx={{ lineHeight: '1' }}>
    {t('weight')} {/* 'Weight (kg):' translated */}
  </Typography>
  <Typography sx={{ lineHeight: '1' }}>
    {latestWeight !== null ? latestWeight : '-'}
  </Typography>
  <Typography sx={{ lineHeight: '1' }}>
    {t('weight-unit')} {/* 'kg' translated */}
  </Typography>
</Stack>

{/* Blood Pressure Display */}
<Stack direction="row" spacing={1} alignItems="center">
<Typography sx={{ lineHeight: '1' }}>
    {t('blood-pressure')} {/* 'Blood Pressure' translated */}
  </Typography>
  <Typography sx={{ lineHeight: '1' }}>
    {latestBloodPressure !== null ? latestBloodPressure : '-'}
  </Typography>
</Stack>

{/* Waist Size Display */}
<Stack direction="row" spacing={1} alignItems="center">
<Typography sx={{ lineHeight: '1' }}>
    {t('waist-size')} {/* 'Waist Size' translated */}
  </Typography>
  <Typography sx={{ lineHeight: '1' }}>
    {latestWaistSize !== null ? latestWaistSize : '-'}
  </Typography>
  
</Stack>
              <ActiveSprintCard />
            </Stack>
          </Stack>

          <Stack
            direction="column"
            style={{
              flex: 1,
              marginLeft: '30px',
              marginTop: '10px',
              alignItems: 'center',
            }}
          >
            {/* You can add additional content here if needed */}
          </Stack>
        </Stack>
        <Todo />
      </div>
    </ThemeProvider>
  );
};

export default Home;