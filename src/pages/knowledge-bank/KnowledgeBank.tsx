import { Stack, ThemeProvider, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from '../../utils/Icons';
import MenuButton from '../../components/MenuButton';
import theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { WipPopUp } from '../../components/PopUps/WipPopUp';

export default function KnowledgeBank() {
  const { t } = useLanguage();
  const [openWip, setOpenWip] = useState(false);
  const navigate = useNavigate();
  function handleOpenWip() {
    setOpenWip(true);
  }

  function handleCloseWip() {
    setOpenWip(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <Stack
        marginBottom="20%"
        alignItems="center"
        maxWidth="1000px"
        margin="auto"
        padding="0 8vw 0 8vw"
      >
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('knowledge-bank')}
        </Typography>

        <Stack direction="column" maxWidth="100%" paddingTop="10px" spacing={1}>
          <Typography
            variant="h6"
            marginBottom="1rem"
            alignSelf="left"
            fontWeight="bold"
          >
            {t('eating-habit')}
          </Typography>
          <MenuButton
            onClick={() => navigate('/knowledge-bank/recipes')}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('recipes')}
          </MenuButton>
          <MenuButton
            fullWidth
            onClick={() => navigate('/knowledge-bank/food')}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('healthy-food')}
          </MenuButton>
        </Stack>

        <Stack direction="column" paddingTop="30px" maxWidth="100%" spacing={1}>
          <Typography
            variant="h6"
            marginBottom="1rem"
            alignSelf="left"
            fontWeight="bold"
          >
            {t('training')}
          </Typography>
          <MenuButton
            onClick={handleOpenWip}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('reading-material')}
          </MenuButton>
          <MenuButton
            onClick={handleOpenWip}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('video-material')}
          </MenuButton>
          <MenuButton
            onClick={handleOpenWip}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('training-tips')}
          </MenuButton>
        </Stack>

        <Stack direction="column" paddingTop="30px" maxWidth="100%" spacing={1}>
          <Typography
            variant="h6"
            marginBottom="1rem"
            alignSelf="left"
            fontWeight="bold"
          >
            {t('atrial-fibrillation')}
          </Typography>
          <MenuButton
            onClick={handleOpenWip}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('reading-material')}
          </MenuButton>
          <MenuButton
            onClick={handleOpenWip}
            variant="contained"
            endIcon={<ArrowRight />}
          >
            {t('video-material')}
          </MenuButton>
        </Stack>
        <WipPopUp open={openWip} onClose={handleCloseWip} />
      </Stack>
    </ThemeProvider>
  );
}
