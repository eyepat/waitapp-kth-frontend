import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from '../../utils/Icons';

const MenuButton = styled(Button)({
  borderRadius: '5px',
  width: '90vw',
  height: '50px',
  color: 'black',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'white',
  },
});

export default function KnowledgeBank() {
  const { t } = useLanguage();
  return (
    <Stack
      direction="column"
      alignItems="start"
      margin="auto"
      marginBottom="20%"
    >
      <Typography variant="h4" marginBottom="1rem" alignSelf="center">
        {t('knowledge-bank')}
      </Typography>

      <Stack direction="column" margin="auto" paddingTop="10px" spacing={1}>
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
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('recipe')}
        </MenuButton>
      </Stack>

      <Stack direction="column" margin="auto" paddingTop="30px" spacing={1}>
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

      <Stack direction="column" margin="auto" paddingTop="30px" spacing={1}>
        <Typography
          variant="h6"
          marginBottom="1rem"
          alignSelf="left"
          fontWeight="bold"
        >
          {t('atrial-fibrillation') /*I DONT KNOW WHAT THIS IS!!*/}
        </Typography>
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('reading-material')}
        </MenuButton>
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('video-material')}
        </MenuButton>
      </Stack>
    </Stack>
  );
}
