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
import { z, ZodError } from 'zod';
import Checkbox from '@mui/material/Checkbox';
import { Gender, OnboardingDTO } from '../../api/BaseClient';
import { useKeycloak } from '@react-keycloak/web';

export default function GeneralQuestions() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { user, onboarding, authLevel } = useAuth();
  const { keycloak, initialized } = useKeycloak();

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
  const [isAblationDateKnown, setIsAblationDateKnown] = useState(true);

  const update = () => {
    console.log('todo');
  };

  useEffect(() => {
    if (initialized && keycloak.authenticated && selectedName.length === 0) {
      keycloak.loadUserProfile().then((profile) => {
        const newName = profile.firstName + ' ' + profile.lastName;
        if (newName === ' ') {
          console.log('couldnt get the keycloak name');
        } else {
          setSelectedName(newName);
        }
      });
    }
  }, [keycloak, initialized]);

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
      .refine(
        (date) =>
          date === undefined ||
          date === null ||
          dayjs(date, 'YYYY-MM-DD', false).isValid(),
        {
          message: invalid_type_error,
        }
      )
      .refine(
        (date) =>
          date === undefined || date === null || dayjs(date).isAfter(dayjs()),
        {
          message: invalid_ablation_error,
        }
      ),
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
        ablationDate: isAblationDateKnown
          ? selectedAblationDate?.toISOString()
          : undefined,
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
    if (authLevel >= AuthenticationLevels.LOGGED_IN) {
      navigate('/');
    } else if (authLevel < AuthenticationLevels.NO_DATA_PROVIDED) {
      navigate('/login');
    }
  }, [authLevel]);

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
          <InputLabel
            shrink={false}
            sx={{ display: selectedName ? 'none' : 'block' }}
          >
            {t('enter-name')}
          </InputLabel>
          <OutlinedInput
            notched={false}
            label={t('full-name')}
            onChange={handleNameChange}
            value={selectedName}
          />
        </FormControl>

        <Typography fontWeight="bold" marginTop="2vh">
          {'2. ' + t('gender')}
        </Typography>
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            sx={{ display: selectedGender ? 'none' : 'block' }}
          >
            {t('select-gender')}
          </InputLabel>
          <Select
            value={selectedGender}
            onChange={handleGenderChange}
            fullWidth
            displayEmpty
            renderValue={(value) => (value ? t(value) : '')}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.87)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.87)',
              },
            }}
          >
            <MenuItem disabled value="">
              {t('select-gender')}
            </MenuItem>
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
              <InputLabel
                shrink={false}
                sx={{ display: selectedDOB ? 'none' : 'block' }}
              >
                ...
              </InputLabel>
              <OutlinedInput
                notched={false}
                label={t('select-length')}
                endAdornment={'cm'}
                onChange={handleHeightChange}
              />
            </FormControl>
          </Stack>
          <Stack direction="column" width="100%">
            <Typography fontWeight="bold">{'5. ' + t('weight')}</Typography>
            <FormControl fullWidth>
              <InputLabel
                shrink={false}
                sx={{ display: selectedWeight ? 'none' : 'block' }}
              >
                ...
              </InputLabel>
              <OutlinedInput
                notched={false}
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
              <InputLabel
                shrink={false}
                sx={{ display: selectedWaistSize ? 'none' : 'block' }}
              >
                ...
              </InputLabel>
              <OutlinedInput
                notched={false}
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
                <InputLabel
                  shrink={false}
                  sx={{ display: selectedBloodPressure ? 'none' : 'block' }}
                >
                  ...
                </InputLabel>
                <OutlinedInput
                  notched={false}
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
          <Stack direction="row" alignItems="center">
            <DatePicker
              sx={{ width: '100%' }}
              label={t('select-ablation-date') + ' ' + t('optional')}
              onChange={handleAblationDateChange}
              disabled={!isAblationDateKnown}
            />

            <FormControl
              sx={{
                padding: 0,
                margin: 0,
                paddingLeft: '1.5vh',
                fontStyle: 'italic',
              }}
              component="div"
            >
              <Checkbox
                checked={!isAblationDateKnown}
                onChange={() => setIsAblationDateKnown(!isAblationDateKnown)}
              />
              <Typography>{t('unknown')}</Typography>
            </FormControl>
          </Stack>
        </div>
        <Stack marginTop="2vh" marginBottom="4vh" width="100%">
          <Button
            onClick={() => {
              // TODO: handle actual registration
              /*if (user == undefined) {
                enqueueSnackbar('error-no-user', {
                  variant: 'error',
                });
                return;
              }*/
              if (!validateUserProvidedData()) {
                return;
              }

              const registerUser: OnboardingDTO = {
                gender: selectedGender.toUpperCase() as Gender,
                fullName: selectedName,
                email:
                  user?.email ||
                  keycloak.profile?.email ||
                  keycloak.idTokenParsed?.['email'],
                birthDate: selectedDOB?.add(1, 'day').format('YYYY-MM-DD'),
                height: selectedHeight,
                weight: selectedWeight,
                waistSize: selectedWaistSize,
                bloodPressure: selectedBloodPressure,
                ablationDate: selectedAblationDate
                  ?.add(1, 'day')
                  .format('YYYY-MM-DD'),
              };

              onboarding(registerUser).then(() => {
                if (update) update();
              });
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
