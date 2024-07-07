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
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { InfoOutlined } from '@mui/icons-material';

export default function GeneralQuestions() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  function handlePopUp(): void {
    setOpen(true);
  }

  function handleClose(): void {
    setOpen(false);
  }
  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    undefined
  );

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setSelectedGender(event.target.value);
  };
  return (
    <Stack
      direction="column"
      alignItems="start"
      padding="0 8vw 0 8vw"
      maxWidth="1000px"
      margin="auto"
    >
      <Typography variant="h5" marginBottom="1rem" alignSelf="center">
        {t('questions-about-you')}
      </Typography>
      <Typography variant="caption" alignSelf="start" marginBottom="2vh">
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
      <Typography fontWeight="bold">{'2. ' + t('birth-year')}</Typography>
      <DatePicker
        sx={{ width: '100%' }}
        label={t('select-birth-year')}
        views={['year']}
      />
      <Stack direction="row" spacing={3} width="100%">
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
      <Stack direction="row" spacing={3} width="100%">
        <Stack direction="column" width="50%">
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">
              {'5. ' + t('waist-measurement')}
            </Typography>
            <Button
              sx={{ padding: 0, margin: 0, minWidth: 0 }}
              onClick={handlePopUp}
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
        <div style={{ width: '50%' }}></div>
      </Stack>
      <Stack direction="row" spacing={3} width="100%">
        <Stack direction="column" width="50%">
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">
              {'6. ' + t('resting-pulse')}
            </Typography>
            <Button
              sx={{ padding: 0, margin: 0, minWidth: 0 }}
              onClick={handlePopUp}
            >
              <InfoOutlined />
            </Button>
          </Stack>
          <FormControl fullWidth>
            <InputLabel>...</InputLabel>
            <OutlinedInput
              label={t('select-resting-pulse')}
              endAdornment={'bpm'}
            />
          </FormControl>
        </Stack>
        <Stack direction="column" width="50%">
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">
              {'7. ' + t('blood-pressure')}
            </Typography>
            <Button
              sx={{ padding: 0, margin: 0, minWidth: 0 }}
              onClick={handlePopUp}
            >
              <InfoOutlined />
            </Button>
          </Stack>
          <FormControl fullWidth>
            <InputLabel>...</InputLabel>
            <OutlinedInput
              label={t('select-blood-pressure')}
              endAdornment={'mm/hg'}
            />
          </FormControl>
        </Stack>
      </Stack>
      <div style={{ marginTop: '4vh', marginBottom: '4vh', width: '100%' }}>
        <Typography fontWeight="bold">{t('ablation')}</Typography>
        <DatePicker sx={{ width: '100%' }} label={t('select-ablation-date')} />
      </div>
      <Button
        variant="contained"
        sx={{
          width: '80%',
          margin: 'auto',
          bgcolor: 'black',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        {t('next')}
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize="20px"
          marginTop="10px"
          marginLeft="20px"
        >
          {t('why-we-need-this-data')}
        </Typography>
        <DialogContent>
          <Typography textAlign="left" marginTop="-10px">
            {t('why-we-need-this-data-text')}
          </Typography>
        </DialogContent>
      </Dialog>
    </Stack>
  );
}
