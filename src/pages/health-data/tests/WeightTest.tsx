import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  styled,
} from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import theme from '../../../components/Theme';
import { useAuth } from '../../../contexts/AuthContext';
import { useSnackbar } from 'notistack';
import { useSprintContext } from '../../../contexts/SprintContext';
import { useState } from 'react';
import { WeightDTO } from '../../../api/BaseClient';
import { useWeightContext } from '../../../contexts/MetricsContext';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const CustomInputField = styled(TextField)({
  width: '60%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '2px',
      borderColor: 'rgba(7, 65, 109, 1)',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px 1px rgba(7, 65, 109, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(7, 65, 109, 0.8)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(7, 65, 109, 1)',
    },
    '& input': {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

export default function WeightTest() {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const { sprint } = useSprintContext();
  const { createResource } = useWeightContext();
  const [weight, setWeight] = useState<string>('');

  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems="center">
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('weight-test')}
        </Typography>
        <Typography width={'80%'} textAlign="justify">
          {t('about-weight')}
        </Typography>

        <Box
          marginTop="100px"
          bottom="15%"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <CustomInputField
            type="number"
            variant="outlined"
            value={weight}
            onChange={(e) => {
              if (e.target.value.length <= 5) {
                setWeight(e.target.value);
              }
            }}
            inputProps={{ maxLength: 4 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    fontWeight="bold"
                    fontSize="large"
                    color="hsla(0, 0%, 20%, 1)"
                  >
                    kg
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'black',
              marginTop: '100px',
              borderRadius: '10px',
              width: '60%',
              height: '50px',
              '&:active, &:focus': {
                backgroundColor: 'black',
              },
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            onClick={() => {
              if (user === undefined || user.id === undefined) {
                enqueueSnackbar('error-no-user', { variant: 'error' });
                return;
              }
              if (!/^\d+(\.\d+)?$/.test(weight)) {
                enqueueSnackbar('invalid-weight-error', { variant: 'error' });
                return;
              }
              const weightNumber = Number(weight);
              if (
                isNaN(weightNumber) ||
                weightNumber < 25 ||
                weightNumber > 300
              ) {
                enqueueSnackbar('invalid-weight-error', { variant: 'error' });
                return;
              }

              const metric: WeightDTO = {
                userID: user?.id,
                sprintID: sprint?.id!,
                timestamp: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
                value: weightNumber,
              };
              createResource(metric)
                .then(() => {
                  enqueueSnackbar('success-adding-metric', {
                    variant: 'success',
                  });
                  navigate('/health-data/overview');
                })
                .catch(() => {
                  enqueueSnackbar('error-adding-metric', { variant: 'error' });
                });
            }}
          >
            <Typography>{t('save')}</Typography>
          </Button>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
