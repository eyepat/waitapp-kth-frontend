import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

const CustomTextField = styled(TextField)({
  width: '60%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(7, 65, 109, 1)', // Border color
      borderRadius: '10px', // Border radius
      borderWidth: '2px', // Border width
    },
    '&:hover fieldset': {
      borderColor: 'rgba(7, 65, 109, 0.8)', // Hover effect on the border
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(7, 65, 109, 1)', // Focus effect on the border
    },
    '& input': {
      textAlign: 'center', // Center text alignment
      fontSize: '24px', // Text size
      fontWeight: 'bold', // Text weight
      color: 'rgba(0, 0, 0, 0.87)', // Text color
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none', // Remove individual borders
  },
});

const WrapperBox = styled(Box)({
  display: 'flex',
  width: '60%',
  alignItems: 'center',
  border: '2px solid rgba(7, 65, 109, 1)',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 1px rgba(7, 65, 109, 0.2)',
  padding: '5px 10px',
});

export default function BloodPressureTest() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const { t } = useLanguage();

  return (
    <Stack alignItems="center" sx={{ position: 'absolute' }}>
      <Typography variant="h4" marginBottom="1rem" alignSelf="center">
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
              sx={{ width: '80%' }}
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
          >
            <Typography> {t('save')}</Typography>
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
