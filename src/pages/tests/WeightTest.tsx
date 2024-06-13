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

export default function WeightTest() {
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
  const { t } = useLanguage();
  return (
    <Stack alignItems="center" sx={{ position: 'absolute' }}>
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
          }}
        >
          <Typography> {t('save')}</Typography>
        </Button>
      </Box>
    </Stack>
  );
}
