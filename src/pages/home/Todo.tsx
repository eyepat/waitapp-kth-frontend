import { Stack } from '@mui/material';
import { useMetrics } from '../../contexts/MetricsContext';
import TextCard from '../../components/Cards/TextCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

export default function Todo() {
  const { RAPA } = useMetrics();
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <Stack direction="column" justifyContent="center" alignSelf="center">
      {RAPA !== undefined && RAPA.length <= 0 && (
        <TextCard
          title={t('measure-rapa')}
          text={t('find-out-your-rapa')}
          onClick={() => {
            navigate('/settings/forms');
            enqueueSnackbar({
              variant: 'warning',
              message: t('this-function-is-wip'),
            });
          }}
          sx={{
            background: '#00a3e050',
            maxWidth: '800px',
            '&:hover': { background: '#00a3e090' },
          }}
        />
      )}
    </Stack>
  );
}
