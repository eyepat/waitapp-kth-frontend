import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ArrowRight,
  Bell,
  ChangeSprint,
  Contact,
  EnglishFlag,
  Forms,
  Help,
  Information,
  Integrity,
  PauseSprint,
  Profile,
  Shield,
  Start,
  StopSprint,
  SwedishFlag,
  Upload,
  Visualize,
} from '../../utils/Icons';
import { useState } from 'react';
import { WipPopUp } from '../../components/PopUps/WipPopUp';
import { useNavigate } from 'react-router-dom';
import theme from '../../components/Theme';
import Popup from '../../components/PopUps/Popup';
import { useAuth } from '../../contexts/AuthContext';
import { enqueueSnackbar } from 'notistack';
import { useSprintContext } from '../../contexts/SprintContext';

export default function Settings() {
  const [openInfo, setOpenInfo] = useState(false);
  const [openWip, setOpenWip] = useState(false);

  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();
  const { logout } = useAuth();
  const { sprint } = useSprintContext();

  const renderCurrentSprint = () => {
    if (!sprint) return renderNoAvailableSprint();
    return renderAvailableSprint();
  };

  function handleOpenWip() {
    setOpenWip(true);
  }

  function handleCloseWip() {
    setOpenWip(false);
  }

  function handlePopUp() {
    setOpenInfo(true);
  }

  function handleCloseInfo() {
    setOpenInfo(false);
  }

  function handleNotification() {
    enqueueSnackbar('page-does-not-work', {
      variant: 'warning',
    });
  }

  const renderAvailableSprint = () => {
    const { completeSprint } = useSprintContext();
    return (
      <CardContent>
        <Button
          onClick={completeSprint}
          fullWidth={true}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <StopSprint />
            <Typography marginLeft={'10px'}>
              {t('end-current-sprint')}
            </Typography>
          </div>
          <ArrowRight />
        </Button>
        <Button
          onClick={handleOpenWip}
          fullWidth={true}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <PauseSprint />
            <Typography marginLeft={'10px'}>{t('plan-a-restday')}</Typography>
          </div>
          <ArrowRight />
        </Button>
        <Button
          onClick={() => navigate('/sprint/choice')}
          fullWidth={true}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <ChangeSprint />
            <Typography marginLeft={'10px'}>
              {t('change-current-sprint')}
            </Typography>
          </div>
          <ArrowRight />
        </Button>
      </CardContent>
    );
  };

  const renderNoAvailableSprint = () => {
    return (
      <CardContent>
        <Button
          onClick={() => navigate('/sprint/choice')}
          fullWidth={true}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <Start />
            <Typography marginLeft={'10px'}>{t('start-new-sprint')}</Typography>
          </div>
          <ArrowRight />
        </Button>
      </CardContent>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="start"
        margin="auto"
        marginBottom="13vh"
        spacing={3}
      >
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('settings')}
        </Typography>
        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ marginBottom: '-25px' }}
            title={
              <Typography variant="h6" fontWeight="bold">
                {t('profile')}
              </Typography>
            }
          />
          <CardContent>
            <Button
              onClick={() => navigate('/settings/profile')}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Profile />
                <Typography marginLeft={'10px'}>
                  {t('personal-details')}
                </Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              onClick={handleOpenWip}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Shield />
                <Typography marginLeft={'10px'}>
                  {t('password-and-security')}
                </Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              onClick={() => navigate('/settings/forms')}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Forms />

                <Typography marginLeft={'10px'}>{t('forms')}</Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              onClick={handleOpenWip}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Integrity />
                <Typography marginLeft={'10px'}>{t('integrity')}</Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              onClick={handleNotification}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Bell />
                <Typography marginLeft={'10px'}>{t('messages')}</Typography>
              </div>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ marginBottom: '-25px' }}
            title={
              <Typography variant="h6" fontWeight="bold">
                {t('how-waitapp-works')}
              </Typography>
            }
          />
          <CardContent>
            <Button
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              onClick={handlePopUp}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Information />
                <Typography marginLeft={'10px'}>{t('information')}</Typography>
              </div>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ marginBottom: '-25px' }}
            title={
              <Typography variant="h6" fontWeight="bold">
                {t('ongoing-sprint')}
              </Typography>
            }
          />
          {renderCurrentSprint()}
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ marginBottom: '-25px' }}
            title={
              <Typography variant="h6" fontWeight="bold">
                {t('data-and-analysis')}
              </Typography>
            }
          />
          <CardContent>
            <Button
              onClick={handleOpenWip}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Upload />
                <Typography marginLeft={'10px'}>
                  {t('alt-data-export')}
                </Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              onClick={handleOpenWip}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Visualize />
                <Typography marginLeft={'10px'}>
                  {t('alt-visualization')}
                </Typography>
              </div>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ marginBottom: '-25px' }}
            title={
              <Typography variant="h6" fontWeight="bold">
                {t('help-and-support')}
              </Typography>
            }
          />
          <CardContent>
            <Button
              onClick={handleOpenWip}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Help />
                <Typography marginLeft={'10px'}>{t('faq')}</Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              onClick={handleOpenWip}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Contact />
                <Typography marginLeft={'10px'}>{t('contact')}</Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              onClick={() => {
                toggleLanguage();
              }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                {language === 'en' ? <SwedishFlag /> : <EnglishFlag />}
                <Typography marginLeft={'10px'}>
                  {t('change-language')}
                </Typography>
              </div>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ marginBottom: '-25px' }}
            title={
              <Typography variant="h6" fontWeight="bold">
                Login
              </Typography>
            }
          />
          <CardContent>
            <Button
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              onClick={logout}
            >
              <Typography marginLeft={'10px'} color="red">
                {t('logout')}
              </Typography>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>

        <Popup
          open={openInfo}
          onClose={handleCloseInfo}
          title="how-waitapp-works"
          content="how-waitapp-works-text"
        />
        <WipPopUp open={openWip} onClose={handleCloseWip} />
      </Stack>
    </ThemeProvider>
  );
}
