import {
  Button,
  Dialog,
  DialogContent,
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
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { InfoOutlined } from '@mui/icons-material';
import Popup from '../../components/PopUps/Popup';

export default function GeneralQuestions() {
  const { t } = useLanguage();

  const [openWaistDialog, setOpenWaistDialog] = useState(false);
  const [openBloodPressureDialog, setOpenBloodPressureDialog] = useState(false);

  const handleOpenWaistDialog = () => setOpenWaistDialog(true);
  const handleCloseWaistDialog = () => setOpenWaistDialog(false);

  const handleOpenBloodPressureDialog = () => setOpenBloodPressureDialog(true);
  const handleCloseBloodPressureDialog = () =>
    setOpenBloodPressureDialog(false);

  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    undefined
  );

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setSelectedGender(event.target.value);
  };

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
        <Typography fontWeight="bold">{'1. ' + t('gender')}</Typography>
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
        <Typography fontWeight="bold" marginTop="4vh">
          {'2. ' + t('birth-year')}
        </Typography>
        <DatePicker
          sx={{ width: '100%' }}
          label={t('select-birth-year')}
          views={['year']}
        />

        <Stack direction="row" spacing={3} width="100%" marginTop="4vh">
          <Stack direction="column" width="100%">
            <Typography fontWeight="bold">{'3. ' + t('length')}</Typography>
            <FormControl fullWidth>
              <InputLabel>...</InputLabel>
              <OutlinedInput label={t('select-length')} endAdornment={'cm'} />
            </FormControl>
          </Stack>
          <Stack direction="column" width="100%">
            <Typography fontWeight="bold">{'4. ' + t('weight')}</Typography>
            <FormControl fullWidth>
              <InputLabel>...</InputLabel>
              <OutlinedInput label={t('select-weight')} endAdornment={'kg'} />
            </FormControl>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={3} width="100%" marginTop="4vh">
          <Stack direction="column" width="100%">
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="bold">
                {'5. ' + t('waist-measurement')}
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
              />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={3} width="100%">
            <Stack direction="column" width="100%">
              <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">
                  {'6. ' + t('blood-pressure')}
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
                />
              </FormControl>
            </Stack>
          </Stack>
        </Stack>

        <div style={{ marginTop: '2vh', marginBottom: '4vh', width: '100%' }}>
          <Typography fontWeight="bold" marginTop="3vh">
            {t('ablation')}
          </Typography>
          <DatePicker
            sx={{ width: '100%' }}
            label={t('select-ablation-date')}
          />
        </div>
        <Stack marginTop="3vh" width="100%">
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
          content="how-to-measure-pressure-text"
        />
      </Stack>
    </ThemeProvider>
  );
}
