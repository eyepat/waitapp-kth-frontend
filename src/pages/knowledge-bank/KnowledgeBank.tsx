import { Stack, ThemeProvider, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from '../../utils/Icons';
import MenuButton from '../../components/MenuButton';
import theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';

export default function KnowledgeBank() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Stack marginBottom="20%" alignItems="center">
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('knowledge-bank')}
        </Typography>

        <Stack direction="column" paddingTop="10px" spacing={1}>
          <Typography
            variant="h6"
            marginBottom="1rem"
            alignSelf="left"
            fontWeight="bold"
          >
            {t('eating-habit')}
          </Typography>
          <MenuButton variant="contained" endIcon={<ArrowRight />}>
            {t('reading-material')}
          </MenuButton>
          <MenuButton variant="contained" endIcon={<ArrowRight />}>
            {t('video-material')}
          </MenuButton>
          <MenuButton
            onClick={() => navigate('/recipes')}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('recipes')}
          </MenuButton>
        </Stack>

        <Stack direction="column" paddingTop="30px" spacing={1}>
          <Typography
            variant="h6"
            marginBottom="1rem"
            alignSelf="left"
            fontWeight="bold"
          >
            {t('training')}
          </Typography>
          <MenuButton variant="contained" endIcon={<ArrowRight />}>
            {t('reading-material')}
          </MenuButton>
          <MenuButton variant="contained" endIcon={<ArrowRight />}>
            {t('video-material')}
          </MenuButton>
          <MenuButton variant="contained" endIcon={<ArrowRight />}>
            {t('training-tips')}
          </MenuButton>
        </Stack>

        <Stack direction="column" paddingTop="30px" spacing={1}>
          <Typography
            variant="h6"
            marginBottom="1rem"
            alignSelf="left"
            fontWeight="bold"
          >
            {t('atrial-fibrillation')}
          </Typography>
          <MenuButton variant="contained" endIcon={<ArrowRight />}>
            {t('reading-material')}
          </MenuButton>
          <MenuButton variant="contained" endIcon={<ArrowRight />}>
            {t('video-material')}
          </MenuButton>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
