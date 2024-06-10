import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ArrowRightOutlined,
  PersonOutline,
  SafetyCheck,
  SafetyCheckOutlined,
} from '@mui/icons-material';
import {
  Bell,
  Help,
  Information,
  Integrity,
  Profile,
  Shield,
  Start,
  Upload,
  Visualize,
} from '../../utils/Icons';

export default function Settings() {
  const { t } = useLanguage();
  return (
    <Stack
      direction="column"
      alignItems="start"
      padding="0 8vw 0 8vw"
      maxWidth="1000px"
      margin="auto"
      marginBottom={'20%'}
      spacing={3}
    >
      <Typography variant="h5" marginBottom="1rem" alignSelf="center">
        {t('settings')}
      </Typography>
      <Card sx={{ width: '100%' }}>
        <CardHeader title={t('profile')} />
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
            <ArrowRightOutlined />
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
            <ArrowRightOutlined />
          </Button>
          <Button
            fullWidth={true}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <Integrity />
              <Typography marginLeft={'10px'}>{t('integrity')}</Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
          <Button
            fullWidth={true}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <Bell />
              <Typography marginLeft={'10px'}>{t('messages')}</Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ width: '100%' }}>
        <CardHeader title={t('how-waitapp-works')} />
        <CardContent>
          <Button
            fullWidth={true}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <Information />
              <Typography marginLeft={'10px'}>{t('information')}</Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ width: '100%' }}>
        <CardHeader title={t('current-sprint')} />
        <CardContent>
          <Button
            fullWidth={true}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <Start />
              <Typography marginLeft={'10px'}>
                {t('start-new-sprint')}
              </Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ width: '100%' }}>
        <CardHeader title={t('data-and-analysis')} />
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
            <ArrowRightOutlined />
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
            <ArrowRightOutlined />
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ width: '100%' }}>
        <CardHeader title={t('health-and-support')} />
        <CardContent>
          <Button
            fullWidth={true}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <Help />
              <Typography marginLeft={'10px'}>{t('help')}</Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
        </CardContent>
      </Card>
    </Stack>
  );
}
