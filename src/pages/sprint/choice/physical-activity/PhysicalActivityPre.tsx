import { Button, Stack, ThemeProvider, Typography } from '@mui/material';
import { useLanguage } from '../../../../contexts/LanguageContext';
import physicalBackground from '../../../../assets/backgrounds/physicalBackground.jpg';
import { WarningIconLarge } from '../../../../utils/Icons';
import { useNavigate } from 'react-router-dom';
import theme from '../../../../components/Theme';
import { ImageHeader } from '../../../../components/Headers/ImageHeader';
import { styled } from '@mui/material/styles';

interface WarnIconProps {
  src: string;
}

export const WarnIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'src',
})<WarnIconProps>`
  width; 100%;
  height: 100%;
  min-width: 70vw;
  min-height: 70vw;
  max-width: 800px;
  max-height: 800px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media(min-width: 900px) {
    max-width: 500px;
    max-height: 500px;
    min-width: 500px;
    min-height: 500px;
  }
`;

export default function FoodHabits() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems="center" sx={{ height: '92vh' }}>
        <ImageHeader image={physicalBackground} />
        <Stack
          direction="column"
          justifyContent="flex-end"
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
          }}
        >
          <Stack
            sx={{
              boxDecoration: 'underline',
              marginTop: '5vh',
              paddingLeft: '2vh',
            }}
          >
            <Typography
              color="white"
              textAlign="left"
              variant="h4"
              style={{ textTransform: 'uppercase' }}
            >
              {t('physical-activity')}
            </Typography>
            <Typography
              color="white"
              textAlign="left"
              variant="h4"
              style={{ textTransform: 'uppercase' }}
              sx={{ borderBottom: '5px solid white', width: '180px' }}
            >
              {t('sprint')}
            </Typography>
          </Stack>
        </Stack>
        <Stack paddingTop={'5vh'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <WarningIconLarge />
          <Typography variant="body1" fontSize="18px" marginTop="3vh" marginBottom="3vh">
            {t('physical-warning-text')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {navigate('/sprint/choice/physical-activity');}}
            sx={{
              backgroundColor: 'black',
              marginBottom: '13vh',
              borderRadius: '10px',
              width: '30vh',
              height: '40px',
              '&:active, &:focus': {
                backgroundColor: 'black',
              },
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <Typography>{t('next')}</Typography>
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
