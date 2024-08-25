import {
  Button,
  Dialog,
  DialogContent,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Rapa() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleShowExamples(): void {
    setOpen(true);
  }

  function handleClose(): void {
    setOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="center"
        margin="auto"
        marginBottom="13vh"
        padding={3}
        spacing={3}
      >
        <Typography
          variant="h4"
          marginBottom="1rem"
          textAlign="center"
          alignSelf="center"
        >
          {t('rapa') + ' (RAPA)'}
        </Typography>
        <Typography
          variant="subtitle1"
          marginBottom="1rem"
          textAlign="justify"
          alignSelf="center"
        >
          {t('what-are-physical-activities')}
        </Typography>
        <Typography
          variant="subtitle1"
          marginBottom="1rem"
          textAlign="justify"
          alignSelf="center"
        >
          {t('questions-about-rapa')}
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          onClick={handleShowExamples}
          sx={{
            width: '50%',
            color: 'black',
            backgroundColor: 'lightgrey',
            borderColor: 'gray',
            borderWidth: '2px',
            '&:hover': {
              borderColor: 'gray',
              backgroundColor: 'gray',
              borderWidth: '2px',
            },
          }}
        >
          {t('examples')}
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate('questions')}
          sx={{ width: '50%' }}
        >
          {t('begin')}
        </Button>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ marginBottom: '5vh' }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          padding="0.3rem"
          marginTop="1rem"
        >
          {t('phyiscal-activities-intensity-levels-examples')}
        </Typography>

        <DialogContent>
          <Stack direction="column" spacing={2} padding={1}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              padding={2}
              border={1}
              borderRadius={2}
              borderColor="grey.500"
            >
              <Stack direction="column" spacing={1} flex={1}>
                <Typography variant="h6" fontWeight="bold">
                  {t('light-activities')}
                </Typography>
                <Typography>• {t('light-activity-description1')}</Typography>
                <Typography>• {t('light-activity-description2')}</Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={1}
                flex={1}
                paddingLeft={2}
                borderLeft={1}
                borderColor="grey.500"
                marginTop={{ xs: '16px', sm: '0' }}
              >
                <Typography variant="body2" fontWeight="bold">
                  {t('examples')}:
                </Typography>
                <Typography>• {t('light-activity-example1')}</Typography>
                <Typography>• {t('light-activity-example2')}</Typography>
                <Typography>• {t('light-activity-example3')}</Typography>
              </Stack>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              padding={2}
              border={1}
              borderRadius={2}
              borderColor="grey.500"
            >
              <Stack direction="column" spacing={1} flex={1}>
                <Typography variant="h6" fontWeight="bold">
                  {t('moderate-activities')}
                </Typography>
                <Typography>• {t('moderate-activity-description1')}</Typography>
                <Typography>• {t('moderate-activity-description2')}</Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={1}
                flex={1}
                paddingLeft={2}
                borderLeft={1}
                borderColor="grey.500"
                marginTop={{ xs: '16px', sm: '0' }}
              >
                <Typography variant="body2" fontWeight="bold">
                  {t('examples')}:
                </Typography>
                <Typography>• {t('moderate-activity-example1')}</Typography>
                <Typography>• {t('moderate-activity-example2')}</Typography>
                <Typography>• {t('moderate-activity-example3')}</Typography>
                <Typography>• {t('moderate-activity-example4')}</Typography>
              </Stack>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              padding={2}
              border={1}
              borderRadius={2}
              borderColor="grey.500"
            >
              <Stack direction="column" spacing={1} flex={1}>
                <Typography variant="h6" fontWeight="bold">
                  {t('vigorous-activities')}
                </Typography>
                <Typography>• {t('vigorous-activity-description1')}</Typography>
                <Typography>• {t('vigorous-activity-description2')}</Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={1}
                flex={1}
                paddingLeft={2}
                borderLeft={1}
                borderColor="grey.500"
                marginTop={{ xs: '16px', sm: '0' }}
              >
                <Typography variant="body2" fontWeight="bold">
                  {t('examples')}:
                </Typography>
                <Typography>• {t('vigorous-activity-example1')}</Typography>
                <Typography>• {t('vigorous-activity-example2')}</Typography>
                <Typography>• {t('vigorous-activity-example3')}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
