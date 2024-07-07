import { Button, CardMedia, Stack, Typography } from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import React, { useState } from 'react';
import physicalBackground from '../../../assets/backgrounds/physicalBackground.jpg';
import NavTab from '../../../components/TabMenu/NavTab';
import NavTabs from '../../../components/TabMenu/NavTabs';
import { useNavigate } from 'react-router-dom';

export default function FoodHabits() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderNormal = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '4px', color: 'white' }}>
            {t('LowPhysicalItemOne')}
          </li>
          <li style={{ marginBottom: '4px', color: 'white' }}>
            {t('LowPhysicalItemTwo')}
          </li>
          <li style={{ marginBottom: '4px', color: 'white' }}>
            {t('LowPhysicalItemThree')}
          </li>
        </ul>
      </Stack>
    );
  };

  const renderIntensive = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '4px', color: 'white' }}>
            {t('HighPhysicalItemOne')}
          </li>
          <li style={{ marginBottom: '4px', color: 'white' }}>
            {t('HighPhysicalItemTwo')}
          </li>
        </ul>
      </Stack>
    );
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return renderNormal();
      case 1:
        return renderIntensive();
      default:
        return null;
    }
  };

  return (
    <Stack
      alignItems="center"
      sx={{ backgroundColor: 'hsla(196, 100%, 44%, 1)' }}
    >
      <CardMedia
        component="img"
        image={physicalBackground}
        alt="Food Background"
        sx={{
          minwidth: '100vw',
          maxWidth: '1000px',
          height: '26.75vh',
          top: 0,
          left: 0,
          position: 'absolute',
          '@media (min-width: 1000px)': {
            left: 'auto',
          },
          filter: 'brightness(80%)',
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
            {t('physical-activity')}
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
        <Typography color="white">{t('goal-level')}</Typography>
        <NavTabs value={value} onChange={handleChange} centered>
          <NavTab
            label={t('normal')}
            sx={{
              '&.Mui-selected': {
                color: 'hsla(196, 100%, 44%, 1)',
              },
              '&:not(.Mui-selected)': {
                backgroundColor: 'hsla(196, 100%, 44%, 1)',
              },
            }}
          />
          <NavTab
            label={t('intensive')}
            sx={{
              '&.Mui-selected': {
                color: 'hsla(196, 100%, 44%, 1)',
              },
              '&:not(.Mui-selected)': {
                backgroundColor: 'hsla(196, 100%, 44%, 1)',
              },
            }}
          />
        </NavTabs>
      </Stack>
      <Stack alignItems="start" padding="0vh 3vh 0vh 3vh" sx={{ flexGrow: 1 }}>
        <Typography color="white" variant="h6" marginTop="3vh">
          {t('planned-activities-for-upcoming-sprint')}:
        </Typography>
        <div style={{ minHeight: '150px' }}>{renderTabContent()}</div>
      </Stack>
      <Stack
        marginTop="8vh"
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
            backgroundColor: 'hsl(0, 100%, 100%)',
            color: 'black',
            marginBottom: '20px',
            borderRadius: '10px',
            width: '30vh',
            height: '40px',
            '&:active, &:focus': {
              backgroundColor: 'hsl(0, 100%, 90%)',
            },
            '&:hover': {
              backgroundColor: 'hsl(0, 100%, 90%)',
            },
          }}
          onClick={() => {
            navigate('/sprint-choice');
          }}
        >
          <Typography>{t('change-sprint')}</Typography>
        </Button>
        <Typography
          color="white"
          marginBottom="2vh"
          textAlign="center"
          width="32vh"
        >
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
  );
}
