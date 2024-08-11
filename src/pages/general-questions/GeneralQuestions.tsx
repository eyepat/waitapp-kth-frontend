import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { InfoOutlined } from '@mui/icons-material';
import Popup from '../../components/PopUps/Popup';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { AuthenticationLevels } from '../../Pages';
import dayjs, { Dayjs } from 'dayjs';
import { RegisterInfo } from '../../types/registerInfo';
import { z, ZodError } from 'zod';

export default function GeneralQuestions() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { user, registerInfo } = useAuth();

  const [openWaistDialog, setOpenWaistDialog] = useState(false);
  const [openBloodPressureDialog, setOpenBloodPressureDialog] = useState(false);

  const handleOpenWaistDialog = () => setOpenWaistDialog(true);
  const handleCloseWaistDialog = () => setOpenWaistDialog(false);

  const handleOpenBloodPressureDialog = () => setOpenBloodPressureDialog(true);
  const handleCloseBloodPressureDialog = () =>
    setOpenBloodPressureDialog(false);

  const [selectedName, setSelectedName] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedDOB, setSelectedDOB] = useState<Dayjs | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<number | undefined>(
    undefined
  );
  const [selectedWeight, setSelectedWeight] = useState<number | undefined>(
    undefined
  );
  const [selectedWaistSize, setSelectedWaistSize] = useState<
    number | undefined
  >(undefined);
  const [selectedBloodPressure, setSelectedBloodPressure] = useState<
    string | undefined
  >(undefined);
  const [selectedAblationDate, setSelectedAblationDate] =
    useState<Dayjs | null>(null);

  const handleNameChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;
    setSelectedName(value);
  };
  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setSelectedGender(event.target.value);
  };
  const handleDOBChange = (value: Dayjs | null) => {
    setSelectedDOB(value);
  };
  const handleHeightChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setSelectedHeight(Number(value));
    }
  };
  const handleWeightChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      const valueAsNum = Number(value);
      //ToDo fix magical numbers and get check values from  KI
      setSelectedWeight(valueAsNum);
    }
  };
  const handleWaistSizeChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      //ToDo fix magical numbers and get check values from  KI
      setSelectedWaistSize(Number(value));
    }
  };
  const handleBloodPressureChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;
    setSelectedBloodPressure(value);
  };
  const handleAblationDateChange = (value: Dayjs | null) => {
    setSelectedAblationDate(value);
  };

  const invalid_type_error = 'invalid-type-error';
  const invalid_dob_error = 'invalid-dob-error';
  const invalid_ablation_error = 'invalid-ablation-error';
  const required_error = 'required-error';
  const invalid_blood_pressure_error = 'invalid-blood-pressure-error';
  const invalid_waist_size_error = 'invalid-waist-size-error';
  const invalid_height_error = 'invalid-height-error';
  const invalid_weight_error = 'invalid-weight-error';

  const SignUpSchema = z.object({
    fullName: z
      .string({ invalid_type_error, required_error })
      .min(1, { message: required_error }),
    gender: z
      .string({ invalid_type_error, required_error })
      .min(1, { message: required_error }),
    birthDate: z
      .string({ invalid_type_error, required_error })
      .refine((date) => dayjs(date, 'YYYY-MM-DD', false).isValid(), {
        message: invalid_type_error,
      })
      .refine((date) => dayjs(date).isBefore(dayjs()), {
        message: invalid_dob_error,
      }),
    height: z
      .number({ invalid_type_error, required_error })
      .min(1, { message: required_error })
      .min(50, { message: invalid_height_error })
      .max(250, { message: invalid_height_error }),
    weight: z
      .number({ invalid_type_error, required_error })
      .min(1, { message: required_error })
      .min(25, { message: invalid_weight_error })
      .max(300, { message: invalid_weight_error }),
    waistSize: z
      .number({ invalid_type_error, required_error })
      .min(1, { message: required_error })
      .min(40, { message: invalid_waist_size_error })
      .max(200, { message: invalid_waist_size_error }),
    bloodPressure: z
      .string({ invalid_type_error, required_error })
      .min(1, { message: required_error })
      .refine((bp) => /^\d{1,3}\/\d{1,3}$/.test(bp), {
        message: invalid_blood_pressure_error,
      }),
    ablationDate: z
      .string({ invalid_type_error, required_error })
      .optional()
      .refine((date) => dayjs(date, 'YYYY-MM-DD', false).isValid(), {
        message: invalid_type_error,
      })
      .refine((date) => dayjs(date).isAfter(dayjs()), {
        message: invalid_ablation_error,
      }),
  });

  const validateUserProvidedData: () => boolean = () => {
    try {
      SignUpSchema.parse({
        fullName: selectedName,
        gender: selectedGender,
        birthDate: selectedDOB?.toISOString(),
        height: selectedHeight,
        weight: selectedWeight,
        waistSize: selectedWaistSize,
        bloodPressure: selectedBloodPressure,
        ablationDate: selectedAblationDate?.toISOString(),
      });

      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((e) => {
          const errorMessage = e.message;
          // Enqueue each error message
          enqueueSnackbar(t(errorMessage), { variant: 'error' });
        });
      } else {
        // Handle other types of errors if necessary
        enqueueSnackbar('An unexpected error occurred.', { variant: 'error' });
      }

      return false;
    }
  };

  useEffect(() => {
    if (
      user?.authLevel ? user.authLevel >= AuthenticationLevels.LOGGED_IN : false
    ) {
      navigate('/');
    } else if (
      user?.authLevel
        ? user.authLevel < AuthenticationLevels.NO_DATA_PROVIDED
        : true
    ) {
      navigate('/login');
    }
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="start"
        padding="0 8vw 0 8vw"
        maxWidth="1000px"
        margin="auto"
      >
        <Typography
          variant="h4"
          alignSelf="start"
          color="hsla(196, 85%, 46%, 1)"
        >
          {t('questions-about-you')}
        </Typography>
        <Typography variant="body1" alignSelf="start" marginBottom="2vh">
          {t('general-questions')}
        </Typography>
        <Typography fontWeight="bold">{'1. ' + t('full-name')}</Typography>
        <FormControl fullWidth>
          <InputLabel>{t('enter-name')}</InputLabel>
          <OutlinedInput label={t('full-name')} onChange={handleNameChange} />
        </FormControl>
        <Typography fontWeight="bold" marginTop="2vh">
          {'2. ' + t('gender')}
        </Typography>
        <FormControl fullWidth>
          <InputLabel>{t('select-gender')}</InputLabel>
          <Select
            value={selectedGender}
            onChange={handleGenderChange}
            fullWidth={true}
            title={t('select-gender')}
            label={t('select-gender')}
          >
            <MenuItem value="male">{t('male')}</MenuItem>
            <MenuItem value="female">{t('female')}</MenuItem>
            <MenuItem value="non-binary">{t('non-binary')}</MenuItem>
            <MenuItem value="other">{t('other')}</MenuItem>
          </Select>
        </FormControl>
        <Typography fontWeight="bold" marginTop="2vh">
          {'3. ' + t('birth-date')}
        </Typography>
        <DatePicker
          sx={{ width: '100%' }}
          label={t('select-birth-date')}
          onChange={handleDOBChange}
        />
        <Stack direction="row" spacing={3} width="100%" marginTop="2vh">
          <Stack direction="column" width="100%">
            <Typography fontWeight="bold">{'4. ' + t('length')}</Typography>
            <FormControl fullWidth>
              <InputLabel>...</InputLabel>
              <OutlinedInput
                label={t('select-length')}
                endAdornment={'cm'}
                onChange={handleHeightChange}
              />
            </FormControl>
          </Stack>
          <Stack direction="column" width="100%">
            <Typography fontWeight="bold">{'5. ' + t('weight')}</Typography>
            <FormControl fullWidth>
              <InputLabel>...</InputLabel>
              <OutlinedInput
                label={t('select-weight')}
                endAdornment={'kg'}
                onChange={handleWeightChange}
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={3} width="100%" marginTop="2vh">
          <Stack direction="column" width="100%">
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="bold">
                {'6. ' + t('waist-measurement')}
              </Typography>
              <Button
                sx={{ padding: 0, margin: 0, minWidth: 0 }}
                onClick={handleOpenWaistDialog}
              >
                <InfoOutlined />
              </Button>
            </Stack>
            <FormControl fullWidth>
              <InputLabel>...</InputLabel>
              <OutlinedInput
                label={t('select-waist-measurement')}
                endAdornment={'cm'}
                onChange={handleWaistSizeChange}
              />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={3} width="100%">
            <Stack direction="column" width="100%">
              <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">
                  {'7. ' + t('blood-pressure')}
                </Typography>
                <Button
                  sx={{ padding: 0, margin: 0, minWidth: 0 }}
                  onClick={handleOpenBloodPressureDialog}
                >
                  <InfoOutlined />
                </Button>
              </Stack>
              <FormControl fullWidth>
                <InputLabel>...</InputLabel>
                <OutlinedInput
                  label={t('select-blood-pressure')}
                  endAdornment={'mmHg'}
                  onChange={handleBloodPressureChange}
                />
              </FormControl>
            </Stack>
          </Stack>
        </Stack>

        <div style={{ marginBottom: '4vh', width: '100%' }}>
          <Typography fontWeight="bold" marginTop="3vh">
            {t('ablation')}
          </Typography>
          <DatePicker
            sx={{ width: '100%' }}
            label={t('select-ablation-date')}
            onChange={handleAblationDateChange}
          />
        </div>
        <Stack marginTop="2vh" marginBottom="4vh" width="100%">
          <Button
            onClick={() => {
              // TODO: handle actual registration
              if (user == undefined) {
                enqueueSnackbar('error-no-user', {
                  variant: 'error',
                });
                return;
              }
              if (!validateUserProvidedData()) {
                return;
              }
              const registerUser: RegisterInfo = {
                id: user.id,
                gender: selectedGender.toUpperCase(),
                fullName: selectedName,
                email: user.email,
                birthDate: selectedDOB?.toISOString(),
                height: selectedHeight,
                weight: selectedWeight,
                waistSize: selectedWaistSize,
                bloodPressure: selectedBloodPressure,
                ablationDate: selectedAblationDate?.toISOString(),
              };

              console.log(registerUser);

              // TODO: fill with actual info
              registerInfo(registerUser);
            }}
            variant="contained"
            sx={{
              fontSize: '1.3rem',
              width: '90%',
              height: '6vh',
              margin: 'auto',
              bgcolor: 'hsla(200, 100%, 26%, 1)',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'hsla(200, 100%, 16%, 1)',
              },
            }}
          >
            {t('register')}
          </Button>
        </Stack>

        <Popup
          open={openWaistDialog}
          onClose={handleCloseWaistDialog}
          title="how-to-measure-waist"
          content="how-to-measure-waist-text"
        />

        <Popup
          open={openBloodPressureDialog}
          onClose={handleCloseBloodPressureDialog}
          title="how-to-measure-pressure"
          content="how-to-measure-blood-pressure"
        />
      </Stack>
    </ThemeProvider>
  );
}
