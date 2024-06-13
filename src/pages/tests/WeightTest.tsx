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
        borderColor: 'rgba(7, 65, 109, 1)', // Border color
        borderRadius: '10px', // Border radius
        boxShadow: '0px 0px 10px 1px rgba(7, 65, 109, 0.2)', // Box shadow for the border
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
  });
  const { t } = useLanguage();
  return (
    <Stack marginBottom="20%" alignItems="center">
      <Typography variant="h4" marginBottom="1rem" alignSelf="center">
        {t('weight-test')}
      </Typography>
      <Typography width={'80%'} textAlign="justify">
        {t('about-weight')}
      </Typography>

      <Box
        position="absolute"
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
          style={{
            backgroundColor: 'black',
            marginTop: '30%',
            borderRadius: '10px',
            width: '60%',
            height: '50px',
          }}
        >
          <Typography> {t('save')}</Typography>
        </Button>
      </Box>
    </Stack>
  );
}
