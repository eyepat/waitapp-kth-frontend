import React, { useEffect, useState } from 'react';
import { Stack, ThemeProvider, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import theme from '../../components/Theme';
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
  const [latestWeight, setLatestWeight] = useState<number | null>(null);
  const [latestWaistSize, setLatestWaistSize] = useState<number | null>(null);
  const [latestBloodPressure, setLatestBloodPressure] = useState<string | null>(
    null
  );
  const [_systolic, setSystolic] = useState<number | null>(null);
  const [_diastolic, setDiastolic] = useState<number | null>(null);

  const { t } = useLanguage();

  const { getResources: getBPs, resources: bpResources } =
    useBloodPressureContext();
  const { getResources: getWeights, resources: weightResources } =
    useWeightContext();
  const { getResources: getWaistSizes, resources: waistSizeResources } =
    useWaistSizeContext();

  useEffect(() => {
    getBPs();
    getWeights();
    getWaistSizes();
  }, []);

  useEffect(() => {
    if (weightResources && weightResources.length > 0) {
      const sortedWeights = [...weightResources].sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      const latest = sortedWeights[0] as WeightDTO;
      setLatestWeight(latest.value ? Number(latest.value) : null);
    }
  }, [weightResources]);

  useEffect(() => {
    if (waistSizeResources && waistSizeResources.length > 0) {
      const sortedWaistSizes = [...waistSizeResources].sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      const latest = sortedWaistSizes[0] as WaistSizeDTO;
      setLatestWaistSize(latest.value ? Number(latest.value) : null);
    }
  }, [waistSizeResources]);

  useEffect(() => {
    if (bpResources && bpResources.length > 0) {
      const sortedBPs = [...bpResources].sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      // Get the latest blood pressure value
      const latest = sortedBPs[0] as BloodPressureDTO;

      if (latest.value) {
        setLatestBloodPressure(latest.value);

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

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography sx={{ lineHeight: '1' }}>{t('weight')}</Typography>
                <Typography sx={{ lineHeight: '1' }}>
                  {latestWeight !== null ? latestWeight : '-'}
                </Typography>
                <Typography sx={{ lineHeight: '1' }}>
                  {t('weight-unit')}
                </Typography>
              </Stack>

              {/* Blood Pressure Display */}
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography sx={{ lineHeight: '1' }}>
                  {t('blood-pressure')}
                </Typography>
                <Typography sx={{ lineHeight: '1' }}>
                  {latestBloodPressure !== null ? latestBloodPressure : '-'}
                </Typography>
              </Stack>

              {/* Waist Size Display */}
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography sx={{ lineHeight: '1' }}>
                  {t('waist-size')}
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
          ></Stack>
        </Stack>
        <Todo />
      </div>
    </ThemeProvider>
  );
};

export default Home;
