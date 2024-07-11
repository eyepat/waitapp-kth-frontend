import { Stack, ThemeProvider, Typography, Button, Box } from '@mui/material';
import moon from '../../assets/sprint/moon.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import { Svg } from '../../utils/Icons';
import theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/PopUps/Popup';
import { useState } from 'react';

export default function Sprint() {
  const [openSprintInfo, setOpenSprintInfo] = useState(false);
  const handleOpenSprintInfo = () =>
    setOpenSprintInfo(true); /*Use in future (the i button on sprint page)*/
  const handleCloseSprintInfo = () => setOpenSprintInfo(false);

  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Stack marginBottom="20vh" alignItems="center">
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('sprint')}
        </Typography>
        <Svg
          src={moon}
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <Box
          position="absolute"
          bottom="0"
          marginBottom="10vh"
          borderTop="2px solid black"
          borderRadius="15px"
          textAlign="center"
          bgcolor="white"
        >
          {/*ToDo Fix backgrund color, Remove visual border, Make button wider */}
          <Typography variant="h6" marginBottom="1rem" alignSelf="center">
            {t('no-active-sprint')}
          </Typography>
          <Typography variant="body1" marginBottom="1rem" alignSelf="center">
            {t('no-active-sprint-yet')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/sprint-choice')}
          >
            {t('choose-new-sprint')}
          </Button>
        </Box>
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
