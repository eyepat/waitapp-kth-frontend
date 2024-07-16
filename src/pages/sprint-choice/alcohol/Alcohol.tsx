import {
  Button,
  CardMedia,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import alcoholBackground from '../../../assets/backgrounds/alcoholBackground.jpg';
import { useNavigate } from 'react-router-dom';
import theme from '../../../components/Theme';

export default function FoodHabits() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Stack
        alignItems="center"
        sx={{ backgroundColor: 'hsla(196, 100%, 44%, 1)' }}
      >
        <CardMedia
          component="img"
          image={alcoholBackground}
          alt="Food Background"
          sx={{
            minwidth: '100vw',
            width: '100vw',
            height: '26.75vh',
            top: 0,
            left: 0,
            position: 'absolute',
            '@media (min-width: 1000px)': {
              left: 'auto',
            },
            filter: 'brightness(65%)',
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
              {t('alcohol')}
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
        <Stack
          alignItems="start"
          padding="0vh 3vh 0vh 3vh"
          marginTop="5vh"
          sx={{ flexGrow: 1 }}
        >
          <Typography color="white" variant="h6" marginTop="9vh">
            {t('planned-activities-for-upcoming-sprint')}:
          </Typography>
          <div style={{ minHeight: '150px' }}>
            <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '4px', color: 'white' }}>
                  {t('AlcoholItemOne')}
                </li>
                <li style={{ marginBottom: '4px', color: 'white' }}>
                  {t('AlcoholItemTwo')}
                </li>
              </ul>
            </Stack>
          </div>
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
    </ThemeProvider>
  );
}
