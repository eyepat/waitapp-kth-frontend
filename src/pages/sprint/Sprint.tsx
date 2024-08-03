import { useState, useEffect } from 'react';
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
import { Background } from './MoonBackground';
import { useAuth } from '../../contexts/AuthContext';
import { getSprint } from '../../api/sprint';
import SprintCard from '../../components/Cards/sprintCard';
import { Measure, Chat } from '../../utils/Icons';

export default function Sprint() {
  const { user } = useAuth();
  const [activeSprint] = useState(
    user ? user.currentSprintID && user.currentSprintID >= 0 : false
  );
  const [openSprintInfo, setOpenSprintInfo] = useState(false);
  const handleOpenSprintInfo = () => setOpenSprintInfo(true);
  const handleCloseSprintInfo = () => setOpenSprintInfo(false);

  const [currentSprint, setCurrentSprint] = useState<Sprint | null>(null);

  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentSprint = async () => {
      const sprint = await getSprint(user ? user.currentSprintID ?? -1 : -1);
      setCurrentSprint(sprint);
    };
    if (user?.currentSprintID !== undefined && user?.currentSprintID > 0) {
      getCurrentSprint();
    }
  }, [user]);

  const renderActiveSprint = () => {
    return (
      <Stack marginTop="1vh" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          {t(`${currentSprint ? currentSprint.type : 'undefined'}`).toUpperCase()}
        </Typography>
        <Typography variant="h2" fontWeight="bold" textAlign="center">
          {t('day')} x
        </Typography>
        <Card sx={{ width: '40vh', borderRadius: '1vh', marginTop: '3vh' }}>
          <CardContent sx={{ position: 'relative' }}>
            <Typography variant="h6" textAlign="center">
              {t('today')}
            </Typography>
            <SprintCard day={1} rapa={1} week={1} />
            <Typography marginBottom="4vh" textAlign="center">
              x {t('days-until-ablation')}
            </Typography>
            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '6vw',
                height: '5vh',
                left: 0,
                backgroundColor: 'hsla(200, 100%, 26%, 1)',
                color: 'white',
                borderRadius: '0px 8px 0px 0px',
              }}
            >
              <Typography marginRight="5px">{t('measure')}</Typography>
              <Measure />
            </Button>
            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '6vw',
                height: '5vh',
                right: 0,
                backgroundColor: 'hsla(196, 100%, 44%, 1)',
                color: 'white',
                borderRadius: '8px 0px 0px 0px',
              }}
            >
              <Typography marginRight="10px">{t('chat')}</Typography>
              <Chat />
            </Button>
          </CardContent>
        </Card>
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
      <Stack marginBottom="20vh" alignItems="center">
        {activeSprint ? renderActiveSprint() : noActiveSprint()}
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
