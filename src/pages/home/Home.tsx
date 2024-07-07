import React, { useEffect, useState } from 'react';
import { Stack, ThemeProvider, Typography } from '@mui/material';
import { Pulse, Scale, Steps } from '../../utils/Icons';
import ChartMeter from './ChartMeter';
import { useLanguage } from '../../contexts/LanguageContext';
import theme from '../../components/Theme';

const Home: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(142);
  const [weight, setWeight] = useState<number>(84);
  const [steps, setSteps] = useState<number>(2472);
  const [pulse, setPulse] = useState<number>(74);
  const { t } = useLanguage();

  // Added the useEffect below to prevent ts checking from failing since the
  // set functions arn´t used
  // TODO: Remove once they are used
  useEffect(() => {
    setDaysLeft(142);
    setWeight(84);
    setSteps(2472);
    setPulse(74);
  }, []);

  const maxWeight = 100;
  const maxSteps = 2500;
  const maxPulse = 150;

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: '100%',
          margin: 'auto',
          fontFamily: 'Open Sans',
          display: 'flex',
        }}
      >
        <Stack direction="column" style={{ flex: 1, marginLeft: '30px' }}>
          <div style={{ padding: '2vh' }}></div>
          <Stack direction="row" sx={{ width: '60%', alignItems: 'center' }}>
            <Typography
              variant="h2"
              className="open-sans-bold"
              color="#00A3E0"
              fontWeight="bold"
            >
              {daysLeft}
            </Typography>
            <Typography
              variant="h5"
              sx={{ lineHeight: '1', fontWeight: 'bold', marginLeft: '5px' }}
            >
              {t('days-left')}
            </Typography>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Typography variant="caption" lineHeight={3}>
              {t('latest-result')}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Scale />
              <Stack direction="column">
                <Typography sx={{ lineHeight: '1' }}>{weight}</Typography>
                <Typography sx={{ lineHeight: '1' }}>
                  {t('weight-unit')}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Steps />
              <Stack direction="column">
                <Typography sx={{ lineHeight: '1' }}>{steps}</Typography>
                <Typography sx={{ lineHeight: '1' }}>{t('steps')}</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Pulse />
              <Stack direction="column">
                <Typography sx={{ lineHeight: '1' }}>{pulse}</Typography>
                <Typography sx={{ lineHeight: '1' }}>{t('pulse')}</Typography>
              </Stack>
            </Stack>
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
          <Stack direction="row" spacing={1} style={{ alignItems: 'flex-end' }}>
            <ChartMeter
              value={pulse}
              label={<Pulse />}
              barColor="hsla(19, 100%, 45%)"
              lighterColor="hsla(19, 100%, 45%, 0.4)"
              maxValue={maxPulse}
            />
            <ChartMeter
              value={steps}
              label={<Steps />}
              barColor="hsla(200, 100%, 26%)"
              lighterColor="hsla(200, 100%, 26%, 0.4)"
              maxValue={maxSteps}
            />
            <ChartMeter
              value={weight}
              label={<Scale />}
              barColor="hsla(196, 100%, 44%)"
              lighterColor="hsla(196, 100%, 44%, 0.4)"
              maxValue={maxWeight}
            />
          </Stack>
        </Stack>
      </div>
    </ThemeProvider>
  );
};

export default Home;
