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
import React, { useState, useEffect } from 'react';
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';
import { DatePicker } from '@mui/x-date-pickers';
import { useAuth } from '../../contexts/AuthContext';
import dayjs, { Dayjs } from 'dayjs';
import { z } from 'zod';
import Checkbox from '@mui/material/Checkbox';
import { Cancel, Edit } from '@mui/icons-material';

export default function GeneralQuestions() {
  const { t } = useLanguage();
  const { user } = useAuth();

  // State for tracking the current values
  const [selectedName, setSelectedName] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedDOB, setSelectedDOB] = useState<Dayjs | null>(null);
  const [isAblationDateKnown, setIsAblationDateKnown] = useState(true);

  // State for tracking the original values
  const [originalName, setOriginalName] = useState<string>('');
  const [originalGender, setOriginalGender] = useState<string>('');
  const [originalDOB, setOriginalDOB] = useState<Dayjs | null>(null);
  const [originalIsAblationDateKnown, setOriginalIsAblationDateKnown] =
    useState(true);

  const [isEditMode, setIsEditMode] = useState(false);

  // Set the original values from the user object when the component mounts
  useEffect(() => {
    setOriginalName(user?.fullName || '');
    setOriginalGender(user?.gender || '');
    setOriginalDOB(user?.birthDate ? dayjs(user.birthDate) : null);
    setOriginalIsAblationDateKnown(user?.ablationDate ? true : false);

    // Set the form fields to the original values as well
    setSelectedName(user?.fullName || '');
    setSelectedGender(user?.gender || '');
    setSelectedDOB(user?.birthDate ? dayjs(user.birthDate) : null);
    setIsAblationDateKnown(user?.ablationDate ? true : false);
  }, [user]);

  const handleNameChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setSelectedName(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setSelectedGender(event.target.value);
  };

  const handleDOBChange = (value: Dayjs | null) => {
    setSelectedDOB(value);
  };

  const handleAblationDateChange = (value: Dayjs | null) => {
    setSelectedAblationDate(value);
  };

  const handleEditClick = () => {
    if (isEditMode) {
      // If already in edit mode and cancel is clicked, revert to original values
      setSelectedName(originalName);
      setSelectedGender(originalGender);
      setSelectedDOB(originalDOB);
      setIsAblationDateKnown(originalIsAblationDateKnown);
    }
    setIsEditMode((prevMode) => !prevMode);
  };

  const SignUpSchema = z.object({
    fullName: z.string().min(1, { message: 'required-error' }),
    gender: z.string().min(1, { message: 'required-error' }),
    birthDate: z
      .string()
      .refine((date) => dayjs(date, 'YYYY-MM-DD', false).isValid(), {
        message: 'invalid-type-error',
      })
      .refine((date) => dayjs(date).isBefore(dayjs()), {
        message: 'invalid-dob-error',
      }),
    ablationDate: z
      .string()
      .optional()
      .refine(
        (date) =>
          date === undefined ||
          date === null ||
          dayjs(date, 'YYYY-MM-DD', false).isValid(),
        {
          message: 'invalid-type-error',
        }
      )
      .refine(
        (date) =>
          date === undefined || date === null || dayjs(date).isAfter(dayjs()),
        {
          message: 'invalid-ablation-error',
        }
      ),
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="start"
        padding="0 8vw 0 8vw"
        maxWidth="1000px"
        margin="auto"
      >
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h4"
            alignSelf="start"
            marginBottom="2vh"
            color="hsla(196, 85%, 46%, 1)"
          >
            {t('about-you')}
          </Typography>
          <Button
            variant="contained"
            sx={{ height: '3.5vh', marginBottom: '1.5vh' }}
            endIcon={!isEditMode ? <Edit /> : <Cancel />}
            onClick={handleEditClick}
          >
            {isEditMode ? t('cancel') : t('edit')}
          </Button>
        </Stack>
        {isEditMode && (
          <Typography
            alignSelf="center"
            variant="h5"
            marginBottom="1vh"
            marginTop="-1vh"
          >
            {t('editing')}
          </Typography>
        )}
        <Typography fontWeight="bold">{t('full-name')}</Typography>
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            sx={{ display: selectedName ? 'none' : 'block' }}
          >
            {user?.fullName}
          </InputLabel>
          <OutlinedInput
            notched={false}
            label={t('full-name')}
            onChange={handleNameChange}
            value={selectedName}
            disabled={!isEditMode}
          />
        </FormControl>

        <Typography fontWeight="bold" marginTop="2vh">
          {t('gender')}
        </Typography>
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            sx={{ display: selectedGender ? 'none' : 'block' }}
          >
            {user?.gender != undefined ? t(user?.gender) : t('pick-gender')}
          </InputLabel>
          <Select
            value={selectedGender}
            onChange={handleGenderChange}
            fullWidth
            displayEmpty
            renderValue={(value) => (value ? t(value) : '')}
            disabled={!isEditMode}
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
          {t('birth-date')}
        </Typography>
        <DatePicker
          sx={{ width: '100%' }}
          label={
            user?.birthDate == undefined
              ? t('select-birth-date')
              : user.birthDate
          }
          onChange={handleAblationDateChange}
          disabled={!isEditMode || !isAblationDateKnown}
        />

        <div style={{ marginBottom: '4vh', width: '100%' }}>
          <Typography fontWeight="bold" marginTop="3vh">
            {t('ablation')}
          </Typography>
          <Stack direction="row" alignItems="center">
            <DatePicker
              sx={{ width: '100%' }}
              label={
                user?.ablationDate == undefined
                  ? t('select-ablation-date') + ' ' + t('optional')
                  : user.ablationDate
              }
              onChange={handleAblationDateChange}
              disabled={!isEditMode || !isAblationDateKnown}
            />

            {isEditMode && (
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
                  disabled={!isEditMode}
                />

                <Typography>{t('unknown')}</Typography>
              </FormControl>
            )}
          </Stack>
        </div>
        {isEditMode && (
          <Stack marginTop="2vh" marginBottom="4vh" width="100%">
            <Button
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
              {t('save')}
            </Button>
          </Stack>
        )}
      </Stack>
    </ThemeProvider>
  );
}

function setSelectedAblationDate(value: dayjs.Dayjs | null) {
  throw new Error('Function not implemented.');
}
