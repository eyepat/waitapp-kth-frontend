import { Stack } from '@mui/material';
import TextCard from '../../components/Cards/TextCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const RAPA: undefined | string = ((): undefined | string => undefined)();
  return (
    <Stack direction="column" justifyContent="center" alignSelf="center">
      {RAPA !== undefined && RAPA.length <= 0 && (
        <TextCard
          title={t('measure-rapa')}
          text={t('find-out-your-rapa')}
          onClick={() => {
            navigate('/settings/forms/rapa');
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
