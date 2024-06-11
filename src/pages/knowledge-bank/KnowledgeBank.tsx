import { Stack, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';

export default function KnowledgeBank() {
  const { t } = useLanguage();
  return (
    <Stack direction="column" alignItems="start" margin="auto">
      <Typography variant="h4" marginBottom="1rem" alignSelf="center">
        {t('knowledge-bank')}
      </Typography>
    </Stack>
  );
}
