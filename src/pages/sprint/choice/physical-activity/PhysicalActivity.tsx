import { Button, Stack, ThemeProvider, Typography } from '@mui/material';
import { useLanguage } from '../../../../contexts/LanguageContext';
import React, { useState } from 'react';
import physicalBackground from '../../../../assets/backgrounds/physicalBackground.jpg';
import NavTab from '../../../../components/TabMenu/NavTab';
import NavTabs from '../../../../components/TabMenu/NavTabs';
import { useNavigate } from 'react-router-dom';
import theme from '../../../../components/Theme';
import { ImageHeader } from '../../../../components/Headers/ImageHeader';
import { useSprintContext } from '../../../../contexts/SprintContext';
import dayjs from 'dayjs';
import { Level, SprintDTO, SprintType } from '../../../../api/BaseClient';

export default function FoodHabits() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const { createSprintAndUpdateUser } = useSprintContext();

  const handleSprintStart = () => {
    const sprint: SprintDTO = {
      userID: -1,
      sprintType: 'PHYSICAL' as SprintType,
      startDate: dayjs().format('YYYY-MM-DD'),
      endDate: dayjs().add(7, 'days').format('YYYY-MM-DD'),
      completed: false,
      level: 'NORMAL' as Level,
      score: 0,
    };

    createSprintAndUpdateUser(sprint);
    navigate('/sprint');
  };

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderNormal = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '4px' }}>{t('LowPhysicalItemOne')}</li>
          <li style={{ marginBottom: '4px' }}>{t('LowPhysicalItemTwo')}</li>
          <li style={{ marginBottom: '4px' }}>{t('LowPhysicalItemThree')}</li>
        </ul>
      </Stack>
    );
  };

  const renderIntensive = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '4px' }}>{t('HighPhysicalItemOne')}</li>
          <li style={{ marginBottom: '4px' }}>{t('HighPhysicalItemTwo')}</li>
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
    <ThemeProvider theme={theme}>
      <Stack alignItems="center" sx={{ height: '92vh' }}>
        <ImageHeader image={physicalBackground} />
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
              marginTop: '5vh',
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
        <Stack width={'90%'} paddingTop={'5vh'}>
          <Typography marginTop="3vh">{t('goal-level')}</Typography>
          <NavTabs value={value} onChange={handleChange} centered>
            <NavTab label={t('normal')} />
            <NavTab label={t('intensive')} />
          </NavTabs>
        </Stack>
        <Stack
          alignItems="start"
          padding="0vh 3vh 0vh 3vh"
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="body1" fontSize="18px" marginTop="3vh">
            {t('planned-activities-for-upcoming-sprint')}:
          </Typography>
          <div style={{ minHeight: '150px' }}>{renderTabContent()}</div>
        </Stack>
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography marginBottom="2vh" textAlign="center" width="32vh">
            {t('start-sprint-when-you-are-ready')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSprintStart}
            sx={{
              backgroundColor: 'black',
              marginBottom: '13vh',
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
