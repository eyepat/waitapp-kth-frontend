import {
  Button,
  MenuItem,
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
  const { t } = useLanguage();
  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    undefined
  );

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setSelectedGender(event.target.value);
  };
  return (
    <Stack direction="column" alignItems="start" padding="0 8vw 0 8vw">
      <Typography variant="h5" marginBottom="1rem" alignSelf="center">
        {t('questions-about-you')}
      </Typography>
      <Typography variant="caption" alignSelf="start" marginBottom="2vh">
        {t('general-questions')}
      </Typography>
      <Typography fontWeight="bold">{'1. ' + t('gender')}</Typography>
      <Select
        value={selectedGender ? selectedGender : t('select-gender')}
        onChange={handleGenderChange}
        fullWidth={true}
        placeholder={t('select-gender')}
        title={t('select-gender')}
        label={t('select-gender')}
      >
        <MenuItem value="male">{t('male')}</MenuItem>
        <MenuItem value="female">{t('female')}</MenuItem>
        <MenuItem value="non-binary">{t('non-binary')}</MenuItem>
      </Select>
      <Typography fontWeight="bold">{'2. ' + t('birth-year')}</Typography>
      <DatePicker
        sx={{ width: '100%' }}
        label={t('select-birth-year')}
        views={['year']}
      />
      <Stack direction="row" spacing={3}>
        <Stack direction="column">
          <Typography fontWeight="bold">{'3. ' + t('length')}</Typography>
          <DatePicker
            sx={{ width: '100%' }}
            label={t('select-length')}
            views={['year']}
          />
        </Stack>
        <Stack direction="column">
          <Typography fontWeight="bold">{'4. ' + t('weight')}</Typography>
          <DatePicker
            sx={{ width: '100%' }}
            label={t('select-weight')}
            views={['year']}
          />
        </Stack>
      </Stack>
      <Stack direction="row" spacing={3} width="100%">
        <Stack direction="column" width="50%">
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">
              {'5. ' + t('waist-mesurement')}
            </Typography>
            <Button sx={{ padding: 0, margin: 0, minWidth: 0 }}>
              <InfoOutlined />
            </Button>
          </Stack>
          <DatePicker
            sx={{ width: '100%' }}
            label={t('select-waist-mesurement')}
            views={['year']}
          />
        </Stack>
        <div style={{ width: '50%' }}></div>
      </Stack>
      <Stack direction="row" spacing={3} width="100%">
        <Stack direction="column" width="50%">
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">
              {'6. ' + t('resting-pulse')}
            </Typography>
            <Button sx={{ padding: 0, margin: 0, minWidth: 0 }}>
              <InfoOutlined />
            </Button>
          </Stack>
          <DatePicker
            sx={{ width: '100%' }}
            label={t('select-resting-pulse')}
            views={['year']}
          />
        </Stack>
        <Stack direction="column" width="50%">
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">
              {'7. ' + t('blood-pressure')}
            </Typography>
            <Button sx={{ padding: 0, margin: 0, minWidth: 0 }}>
              <InfoOutlined />
            </Button>
          </Stack>
          <DatePicker
            sx={{ width: '100%' }}
            label={t('select-blood-pressure')}
            views={['year']}
          />
        </Stack>
      </Stack>
      <div style={{ marginTop: '4vh', marginBottom: '4vh', width: '100%' }}>
        <Typography fontWeight="bold">{t('ablation')}</Typography>
        <DatePicker sx={{ width: '100%' }} label={t('select-ablation-date')} />
      </div>
      <Button variant="contained" sx={{ width: '80%', margin: 'auto' }}>
        {t('next')}
      </Button>
    </Stack>
  );
}
