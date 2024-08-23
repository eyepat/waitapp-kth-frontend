import {
  Button,
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

export default function Rapa() {
  const { t } = useLanguage();
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

        <Button variant="contained" sx={{ width: '50%' }}>
          {t('begin')}
        </Button>
      </Stack>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          marginTop="10px"
        >
          {t('phyiscal-activities-intensity-levels-examples')}
        </Typography>

        <DialogContent>
          <Stack direction="column" spacing={2} padding={1} border={1}>
            <Stack direction="row">
              <Typography>light acitivies</Typography>{' '}
            </Stack>
            <Stack direction="row">
              {' '}
              <Typography>moderate acitivies</Typography>{' '}
            </Stack>
            <Stack direction="row">
              {' '}
              <Typography>vigorous acitivies</Typography>{' '}
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
