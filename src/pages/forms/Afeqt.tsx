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

export default function Afeqt() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  /*function handleShowExamples(): void {
    setOpen(true);
  }*/

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
          {t('afeqt')}
        </Typography>
        <Typography
          variant="subtitle1"
          marginBottom="1rem"
          textAlign="justify"
          alignSelf="center"
        >
          {t('what-is-afeqt')}
        </Typography>
        <Typography
          variant="subtitle1"
          marginBottom="1rem"
          textAlign="justify"
          alignSelf="center"
        >
          {t('questions-about-afeqt')}
        </Typography>

        {/*<Button
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
        </Button>*/}

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
          {t('lifestyle-examples')}
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
                  {t('healthy-habits')}
                </Typography>
                <Typography>• {t('healthy-habit1')}</Typography>
                <Typography>• {t('healthy-habit2')}</Typography>
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
                <Typography>• {t('healthy-habit-example1')}</Typography>
                <Typography>• {t('healthy-habit-example2')}</Typography>
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
                  {t('work-life-balance')}
                </Typography>
                <Typography>• {t('work-life-balance-description1')}</Typography>
                <Typography>• {t('work-life-balance-description2')}</Typography>
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
                <Typography>• {t('work-life-example1')}</Typography>
                <Typography>• {t('work-life-example2')}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
