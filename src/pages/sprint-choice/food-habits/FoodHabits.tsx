import {
  Button,
  CardMedia,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import React, { useState } from 'react';
import foodBackground from '../../../assets/backgrounds/foodBackground.jpg';
import NavTab from '../../../components/TabMenu/NavTab';
import NavTabs from '../../../components/TabMenu/NavTabs';
import { useNavigate } from 'react-router-dom';
import theme from '../../../components/Theme';

export default function FoodHabits() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderLow = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '4px' }}>{t('LowHealthItemOne')}</li>
          <li style={{ marginBottom: '4px' }}>{t('LowHealthItemTwo')}</li>
          <li style={{ marginBottom: '4px' }}>{t('LowHealthItemThree')}</li>
        </ul>
      </Stack>
    );
  };

  const renderMedium = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '4px' }}>{t('MediumHealthItemOne')}</li>
          <li style={{ marginBottom: '4px' }}>{t('MediumHealthItemTwo')}</li>
          <li style={{ marginBottom: '4px' }}>{t('MediumHealthItemThree')}</li>
        </ul>
      </Stack>
    );
  };

  const renderHigh = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '4px' }}>{t('HighHealthItemOne')}</li>
          <li style={{ marginBottom: '4px' }}>{t('HighHealthItemTwo')}</li>
          <li style={{ marginBottom: '4px' }}>{t('HighHealthItemThree')}</li>
        </ul>
      </Stack>
    );
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return renderLow();
      case 1:
        return renderMedium();
      case 2:
        return renderHigh();
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack 
        alignItems="center"
        sx={{ height: '92vh' }}
      >
        <CardMedia
          component="img"
          image={foodBackground}
          alt="Food Background"
          sx={{
            transform: 'scaleX(-1)',
            minwidth: '100vw',
            width: '100vw',
            height: '26.75vh',
            top: 0,
            left: 0,
            position: 'absolute',
            '@media (min-width: 1000px)': {
              left: 'auto',
            },
            filter: 'brightness(65%)',
          }}
        />
        <Stack
          direction="column"
          justifyContent="flex-end"
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
          }}
        >
          <Stack
            sx={{
              boxDecoration: 'underline',
              paddingTop: '8vh',
              paddingLeft: '2vh',
            }}
          >
            <Typography
              color="white"
              textAlign="left"
              variant="h4"
              style={{ textTransform: 'uppercase' }}
            >
              {t('food-habits')}
            </Typography>
            <Typography
              color="white"
              textAlign="left"
              variant="h4"
              style={{ textTransform: 'uppercase' }}
              sx={{ borderBottom: '5px solid white', width: '180px' }}
            >
              {t('sprint')}
            </Typography>
          </Stack>
        </Stack>
        <Stack width={'90%'} paddingTop={'3vh'}>
          <Typography>{t('goal-level')}</Typography>
          <NavTabs value={value} onChange={handleChange} centered>
            <NavTab label={t('low')} />
            <NavTab label={t('medium')} />
            <NavTab label={t('high')} />
          </NavTabs>
        </Stack>
        <Stack alignItems="start" padding="0vh 3vh 0vh 3vh">
          <Typography variant="h6" marginTop="3vh">
            {t('planned-activities-for-upcoming-sprint')}:
          </Typography>
          {renderTabContent()}
        </Stack>
        <Stack
          marginTop="10vh"
          sx={{
            justifyContent: 'center',
            height: '35vh',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'hsla(210, 2%, 60%, 1)',
              color: 'black',
              marginBottom: '20px',
              borderRadius: '10px',
              width: '30vh',
              height: '40px',
              '&:active, &:focus': {
                backgroundColor: 'hsla(210, 2%, 40%, 1)',
              },
              '&:hover': {
                backgroundColor: 'hsla(210, 2%, 40%, 1)',
              },
            }}
            onClick={() => {
              navigate('/sprint-choice');
            }}
          >
            <Typography>{t('change-sprint')}</Typography>
          </Button>
          <Typography marginBottom="2vh" textAlign="center" width="32vh">
            {t('start-sprint-when-you-are-ready')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'black',
              marginBottom: '20px',
              borderRadius: '10px',
              width: '30vh',
              height: '40px',
              '&:active, &:focus': {
                backgroundColor: 'black',
              },
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <Typography>{t('start')}</Typography>
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
