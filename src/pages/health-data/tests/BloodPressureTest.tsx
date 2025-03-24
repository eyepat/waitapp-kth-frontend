import {
  Box,
  Button,
  Dialog,
  DialogContent,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  styled,
} from '@mui/material';
import bloodpressure from '../../../assets/tests/bloodpressure.svg';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useState } from 'react';
import { Svg } from '../../../utils/Icons';
import theme from '../../../components/Theme';
import { useAuth } from '../../../contexts/AuthContext';
import { enqueueSnackbar } from 'notistack';
import { useSprintContext } from '../../../contexts/SprintContext';
import { useBloodPressureContext } from '../../../contexts/MetricsContext';
import { BloodPressureDTO } from '../../../api/BaseClient';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const CustomTextField = styled(TextField)({
  width: '60%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(7, 65, 109, 1)',
      borderRadius: '10px',
      borderWidth: '2px',
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
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

const WrapperBox = styled(Box)({
  display: 'flex',
  backgroundColor: 'white',
  width: '65%',
  alignItems: 'center',
  border: '2px solid rgba(7, 65, 109, 1)',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 1px rgba(7, 65, 109, 0.2)',
  padding: '5px 10px',
});

export default function BloodPressureTest() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const { user } = useAuth();
  const { sprint } = useSprintContext();
  const { createResource } = useBloodPressureContext();
  const navigate = useNavigate();

  function handleHowToMeasure(): void {
    setOpen(true);
  }

  function handleClose(): void {
    setOpen(false);
  }

  const isValidNumber = (value: string) => /^\d+$/.test(value);

  const isValidBloodPressure = (systolic: any, diastolic: any) => {
    const systolicNumber = Number(systolic);
    const diastolicNumber = Number(diastolic);

    return !(
      isNaN(systolicNumber) ||
      systolicNumber < 1 ||
      systolicNumber > 220 ||
      isNaN(diastolicNumber) ||
      diastolicNumber < 1 ||
      diastolicNumber > 160
    );
  };

  const bloodPressureWarning = (systolic: any, diastolic: any) => {
    const systolicNumber = Number(systolic);
    const diastolicNumber = Number(diastolic);

    return (
      isNaN(systolicNumber) ||
      systolicNumber > 180 ||
      isNaN(diastolicNumber) ||
      diastolicNumber > 110
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems="center">
        <Typography variant="h4" marginBottom="1rem" textAlign="center">
          {t('blood-pressure-test')}
        </Typography>
        <Typography width={'80%'} textAlign="justify">
          {t('about-blood-pressure')}
        </Typography>

        <Stack
          sx={{
            bottom: '10%',
            width: '100%',
          }}
        >
          <Box
            bottom="15%"
            marginTop="30px"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <WrapperBox>
              <CustomTextField
                type="number"
                variant="outlined"
                value={systolic}
                onChange={(e) => {
                  if (e.target.value.length <= 3) {
                    setSystolic(e.target.value);
                  }
                }}
                inputProps={{ style: { textAlign: 'right' } }}
                sx={{ width: '45%' }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ margin: '0 10px' }}
              >
                /
              </Typography>
              <CustomTextField
                type="number"
                variant="outlined"
                value={diastolic}
                onChange={(e) => {
                  if (e.target.value.length <= 3) {
                    setDiastolic(e.target.value);
                  }
                }}
                inputProps={{ style: { textAlign: 'left' } }}
                sx={{ width: '90%' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        fontWeight="bold"
                        fontSize="large"
                        color="hsla(0, 0%, 20%, 1)"
                      >
                        mmHg
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
            </WrapperBox>

            <Button
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: '10px',
                marginTop: '90px',
                width: '60%',
                color: 'black',
                borderColor: 'black',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: 'black',
                  borderWidth: '2px',
                },
              }}
              onClick={handleHowToMeasure}
            >
              <Typography>{t('how-to-measure')}</Typography>
            </Button>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: 'black',
                borderRadius: '10px',
                marginTop: '10px',
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
                if (
                  !isValidNumber(systolic) ||
                  !isValidNumber(diastolic) ||
                  !isValidBloodPressure(systolic, diastolic)
                ) {
                  enqueueSnackbar('invalid-blood-pressure-error', {
                    variant: 'error',
                  });
                  return;
                } else if (bloodPressureWarning(systolic, diastolic)) {
                  enqueueSnackbar(
                    t(
                      'Blodtryck är högt, kontrollera mätningen och kontakta 1177 för rådgivning'
                    ),
                    {
                      //ToDo should use t('blood-pressure-warning'), don't know why it's not working...
                      variant: 'warning',
                    }
                  );
                }

                const metric: BloodPressureDTO = {
                  userID: undefined!,
                  sprintID: sprint?.id!,
                  timestamp: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
                  value: systolic + '/' + diastolic,
                };

                createResource(metric)
                  .then(() => {
                    enqueueSnackbar(
                      'success-adding-bloodpressure-measurement',
                      {
                        variant: 'success',
                      }
                    );
                    navigate('/health-data/overview');
                  })
                  .catch(() => {
                    enqueueSnackbar('error-adding-bloodpressure-measurement', {
                      variant: 'error',
                    });
                  });
              }}
            >
              <Typography> {t('save')}</Typography>
            </Button>
          </Box>
        </Stack>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Svg src={bloodpressure} />
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            marginTop="10px"
          >
            {t('how-do-i-measure')}
          </Typography>
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            {t('blood-pressure')}
          </Typography>
          <DialogContent>
            <Typography
              variant="subtitle2"
              textAlign="justify"
              marginTop="-10px"
            >
              {t('how-to-measure-blood-pressure')}
            </Typography>
          </DialogContent>
        </Dialog>
      </Stack>
    </ThemeProvider>
  );
}
