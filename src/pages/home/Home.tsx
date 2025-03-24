import { Stack, Box, ThemeProvider } from '@mui/material';
import theme from '../../components/Theme';
import Todo from './Todo';
import MeasurementCard from '../../components/Cards/MesurementsCard';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: '100%',
          margin: 'auto',
          fontFamily: 'Open Sans',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <Stack height="75vh" flexGrow={1} justifyContent="space-between">
          <Stack direction="row" flexGrow={1}>
            <Stack direction="column" flex={1} ml="6vw">
              <MeasurementCard />
            </Stack>
          </Stack>
          <Todo />
        </Stack>
        <Box height="10rem"></Box>
      </div>
    </ThemeProvider>
  );
}
