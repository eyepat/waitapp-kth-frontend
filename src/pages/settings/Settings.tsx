import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
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

export default function Settings() {
  const { t } = useLanguage();
  return (
    <Stack
      direction="column"
      alignItems="start"
      padding="0 8vw 0 8vw"
      maxWidth="1000px"
      margin="auto"
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
              <PersonOutline />
              <Typography>{t('personal-details')}</Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
          <Button
            fullWidth={true}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <SafetyCheck />
              <Typography>{t('password-and-security')}</Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
          <Button
            fullWidth={true}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              <SafetyCheckOutlined />
              <Typography>{t('integrity')}</Typography>
            </div>
            <ArrowRightOutlined />
          </Button>
        </CardContent>
      </Card>
    </Stack>
  );
}
