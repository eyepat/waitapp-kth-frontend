import {
  Stack,
  ThemeProvider,
  Typography,
  Button,
  Box,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import moon from '../../assets/sprint/moon.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import { Information } from '../../utils/Icons';
import theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/PopUps/Popup';
import { useState } from 'react';
import { Background } from './MoonBackground';
import { useAuth } from '../../contexts/AuthContext';
import { useSprintContext } from '../../contexts/SprintContext';
import SprintCard from '../../components/Cards/sprintCard';
import dayjs from 'dayjs';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

export default function Sprint() {
  const { user } = useAuth();
  const { sprint } = useSprintContext();

  const [openSprintInfo, setOpenSprintInfo] = useState(false);
  const handleOpenSprintInfo = () => setOpenSprintInfo(true);
  const handleCloseSprintInfo = () => setOpenSprintInfo(false);

  const { t } = useLanguage();
  const navigate = useNavigate();

  // State to track the current day and week being viewed
  const [currentDay, setCurrentDay] = useState(
    dayjs().diff(dayjs(sprint ? sprint.startDate : ''), 'days') + 1
  );
  const [isWeeklyView, setIsWeeklyView] = useState(false);

  const totalDays = sprint
    ? dayjs().diff(dayjs(sprint.startDate), 'days') + 1
    : 0;

  const currentWeek = Math.ceil(currentDay / 7);

  const getSprintTypeText: (input: string) => string = (input) => {
    switch (input) {
      case 'PHYSICAL':
        return t('physical-activity');
      case 'FOOD':
        return t('food-habits');
      case 'ALCOHOL':
        return t('alcohol-habits');
      default:
        return t('unknown-sprint-type');
    }
  };

  const handleNext = () => {
    if (isWeeklyView) {
      if (currentDay < totalDays) {
        setCurrentDay(currentDay + 1);
        setIsWeeklyView(false);
      }
    } else if (currentDay % 7 === 0 && currentDay < totalDays) {
      setIsWeeklyView(true);
    } else {
      setCurrentDay(currentDay + 1);
    }
  };

  const handleBack = () => {
    if (isWeeklyView) {
      setIsWeeklyView(false);
    } else if ((currentDay - 1) % 7 === 0 && currentDay > 1) {
      setIsWeeklyView(true);
      setCurrentDay(currentDay - 1);
    } else {
      setCurrentDay(currentDay - 1);
    }
  };

  const renderWeeklySummary = () => {
    return (
      <Card
        sx={{
          width: '90%',
          maxWidth: '500px',
          borderRadius: '1vh',
          marginTop: '3vh',
        }}
      >
        <CardContent sx={{ padding: '2vh' }}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            {t('week')} {currentWeek} - {t('summary')}
          </Typography>
          <Typography textAlign="center" sx={{ marginTop: '2vh' }}>
            {t('congratulations-on-completing-week')} {currentWeek}!
          </Typography>
          <Typography textAlign="center" sx={{ marginTop: '2vh' }}>
            {t('sprint-recap')}
          </Typography>
          <Typography textAlign="center" sx={{ marginTop: '2vh' }}>
            {t('you-achieved')} x {t('goals-this-week')}!
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const renderActiveSprint = () => {
    return (
      <Stack
        marginTop="1vh"
        alignItems="center"
        sx={{ position: 'relative', width: '100%' }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ textAlign: 'center' }}>
          {`${sprint ? getSprintTypeText(sprint.type).toUpperCase() : 'undefined'}`}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0 8%',
          }}
        >
          <ArrowBack
            sx={{
              fontSize: '5vh',
              cursor: 'pointer',
              position: 'absolute',
              left: '5%',
              visibility: currentDay > 1 ? 'visible' : 'hidden',
              zIndex: 1,
            }}
            onClick={handleBack}
          />
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              overflow: 'hidden',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              fontSize: {
                xs: '1.5rem',
                sm: '1.75rem',
                md: '2rem',
                lg: '2.25rem',
              },
              paddingLeft: '6vh',
              paddingRight: '6vh',
            }}
          >
            {isWeeklyView
              ? `${t('week')} ${currentWeek} - ${t('summary')}`
              : `${t('day')} ${currentDay}`}
          </Typography>
          <ArrowForward
            sx={{
              fontSize: '5vh',
              cursor: 'pointer',
              position: 'absolute',
              right: '5%',
              visibility: currentDay < totalDays ? 'visible' : 'hidden',
              zIndex: 1,
            }}
            onClick={handleNext}
          />
        </Box>
        {isWeeklyView ? (
          renderWeeklySummary()
        ) : (
          <Card
            sx={{
              width: '90%',
              maxWidth: '500px',
              borderRadius: '1vh',
              marginTop: '3vh',
            }}
          >
            <CardContent sx={{ position: 'relative' }}>
              <Typography variant="h6" fontWeight="bold" textAlign="center">
                {currentDay === totalDays
                  ? t('today')
                  : dayjs(sprint?.startDate)
                      .add(currentDay - 1, 'day')
                      .format('DD/MM/YYYY')}
              </Typography>
              {user?.ablationDate && (
                <Typography marginBottom="1vh" textAlign="center">
                  {dayjs(user.ablationDate).diff(dayjs(), 'days')}{' '}
                  {t('days-until-ablation')}
                </Typography>
              )}
              <Stack direction="column">
                <SprintCard
                  day={currentDay % 7 === 0 ? 7 : currentDay % 7}
                  rapa={1}
                  week={currentWeek}
                />
              </Stack>
            </CardContent>
          </Card>
        )}
      </Stack>
    );
  };

  const noActiveSprint = () => {
    return (
      <>
        <Background src={moon} />

        <Box
          position="fixed"
          height="200px"
          width="100%"
          bottom="0"
          marginBottom="10vh"
          borderRadius="25px 25px 0px 0px"
          maxWidth="1000px"
          borderBottom="1px solid #ABABAB"
          padding="12px 24px"
          textAlign="center"
          bgcolor="#ffffff"
          boxSizing="border-box"
        >
          <Box
            id="draggableHandle"
            height="20px"
            width="200px"
            margin="auto"
            marginBottom="12px"
          >
            <Box
              height="5px"
              bgcolor="black"
              borderRadius="4px"
              margin="auto"
              width="150px"
            />
          </Box>
          <Box
            height="24px"
            position="relative"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="1rem"
          >
            <Box width="24px" height="24px" />
            <Typography variant="h6" alignSelf="center" fontWeight="700">
              {t('no-active-sprint')}
            </Typography>
            <IconButton
              style={{ padding: '0', width: '24px', height: '24px' }}
              onClick={handleOpenSprintInfo}
            >
              <Information />
            </IconButton>
          </Box>
          <Typography variant="body1" marginBottom="1rem" alignSelf="center">
            {t('no-active-sprint-yet')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: '8px', width: '228px', height: '36px' }}
            onClick={() => navigate('/sprint/choice')}
          >
            {t('choose-new-sprint')}
          </Button>
        </Box>
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack marginBottom="20vh" alignItems="center" padding={3.5}>
        {sprint ? renderActiveSprint() : noActiveSprint()}
      </Stack>

      <Popup
        open={openSprintInfo}
        onClose={handleCloseSprintInfo}
        title="what-is-a-sprint"
        content="what-is-a-sprint-text"
      />
    </ThemeProvider>
  );
}
