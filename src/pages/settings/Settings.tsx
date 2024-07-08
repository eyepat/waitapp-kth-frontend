import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ArrowRight,
  Bell,
  EnglishFlag,
  Help,
  Information,
  Integrity,
  Profile,
  Shield,
  Start,
  SwedishFlag,
  Upload,
  Visualize,
} from '../../utils/Icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../components/Theme';

export default function Settings() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  function handleLanguageChange() {
    const newLanguage = language === 'en' ? 'sv' : 'en';
    console.log(newLanguage);
    setLanguage(newLanguage);
  }

  function handlePopUp() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="start"
        margin="auto"
        marginBottom={'20%'}
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
          <CardContent>
            <Button
              onClick={() => navigate('/sprint-choice')}
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Start />
                <Typography marginLeft={'10px'}>
                  {t('start-new-sprint')}
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
                {t('data-and-analysis')}
              </Typography>
            }
          />
          <CardContent>
            <Button
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
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              onClick={handleLanguageChange}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                {language === 'en' ? <SwedishFlag /> : <EnglishFlag />}
                <Typography marginLeft={'10px'}>
                  {t('change-language')}
                </Typography>
              </div>
              <ArrowRight />
            </Button>
            <Button
              fullWidth={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <Help />
                <Typography marginLeft={'10px'}>{t('help')}</Typography>
              </div>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontSize="20px"
            marginTop="10px"
            marginLeft="20px"
          >
            {t('how-waitapp-works')}?
          </Typography>
          <DialogContent>
            <Typography textAlign="left" marginTop="-10px">
              {t('how-waitapp-works-text')}
            </Typography>
          </DialogContent>
        </Dialog>
      </Stack>
    </ThemeProvider>
  );
}
