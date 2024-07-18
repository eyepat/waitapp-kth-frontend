import { Stack, ThemeProvider, Typography, Button, Box, IconButton } from '@mui/material';
import moon from '../../assets/sprint/moon.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import { Svg, Information } from '../../utils/Icons';
import theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/PopUps/Popup';
import { useState } from 'react';

export default function Sprint() {
  const [activeSprint, setActiveSprint] = useState(false); // Determine if there is an active sprint, set to false for now
  const [openSprintInfo, setOpenSprintInfo] = useState(false);
  const handleOpenSprintInfo = () => setOpenSprintInfo(true); 
  const handleCloseSprintInfo = () => setOpenSprintInfo(false);

  const { t } = useLanguage();
  const navigate = useNavigate();

  const renderActiveSprint = () => {
    return (
      <></>
    );
  }

  const noActiveSprint = () => {
    return (
      <>
        <Svg
          src={moon}
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <Box
          position="fixed"
          height="200px"
          width="100%"
          bottom="0"
          marginBottom="10vh"
          borderRadius="25px 25px 0px 0px"
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
          <Box height="24px" position="relative" display="flex" justifyContent="space-between" alignItems="center" marginBottom="1rem">
            <Box width="24px" height="24px" />
            <Typography variant="h6" alignSelf="center" fontWeight="700">
              {t('no-active-sprint')}
            </Typography>
            <IconButton style={{ padding: "0", width: "24px", height: "24px" }} onClick={handleOpenSprintInfo}>
              <Information />
            </IconButton>
          </Box>
          <Typography variant="body1" marginBottom="1rem" alignSelf="center">
            {t('no-active-sprint-yet')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: '8px', width: '228px', height: '36px'}}
            onClick={() => navigate('/sprint-choice')}
          >
            {t('choose-new-sprint')}
          </Button>
        </Box>
      </>
    );
  }

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
