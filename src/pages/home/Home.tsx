import React, { useEffect, useState } from 'react';
import { Stack, ThemeProvider, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import theme from '../../components/Theme';
import { useAuth } from '../../contexts/AuthContext';
import Todo from './Todo';
import ActiveSprintCard from '../../components/Cards/ActiveSprintCard';


const Home: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [weightDisp, setWeight] = useState<number>(0);
  const [stepsDisp, setSteps] = useState<number>(0);
  const { t } = useLanguage();
  const { user } = useAuth();


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
                {t('latest-result')}    /**ToDo add name of user and all the latest masurements */
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="column">
                  <Typography sx={{ lineHeight: '1' }}>{weightDisp}</Typography>
                  <Typography sx={{ lineHeight: '1' }}>
                    {t('weight-unit')}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="column">
                  <Typography sx={{ lineHeight: '1' }}>{stepsDisp}</Typography>
                  <Typography sx={{ lineHeight: '1' }}>{t('steps')}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="column">
                  <Typography sx={{ lineHeight: '1' }}>{"TODO add blood pressure"}</Typography> 
                  <Typography sx={{ lineHeight: '1' }}>{t('pulse')}</Typography>
                </Stack>
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
            
          </Stack>
        </Stack>
        <Todo />
      </div>
    </ThemeProvider>
  );
};

export default Home;
