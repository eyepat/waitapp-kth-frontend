import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Pulse, Scale, Steps } from '../../utils/Icons';

export default function Home() {
  const [daysLeft, setDaysLeft] = useState<number>(142);
  const [weight, setWeight] = useState<number>(84);
  const [steps, setSteps] = useState<number>(2472);
  const [pulse, setPulse] = useState<number>(74);
  const { t } = useLanguage();
  return (
    <div style={{ width: '85%', margin: 'auto', fontFamily: 'Open Sans' }}>
      <Stack direction="column">
        <Stack direction="row" sx={{ width: '60%', alignItems: 'center' }}>
          <Typography variant="h2" className="open-sans-bold" color="#00A3E0">
            {daysLeft}
          </Typography>

          <Typography variant="h5" sx={{ lineHeight: '1', fontWeight: 'bold' }}>
            {t('days-left')}
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Typography variant="caption" lineHeight={3}>
            {t('latest-result')}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Scale />
            <Stack direction="column">
              <Typography sx={{ lineHeight: '1' }}>{weight}</Typography>
              <Typography sx={{ lineHeight: '1' }}>
                {t('weight-unit')}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Steps />
            <Stack direction="column">
              <Typography sx={{ lineHeight: '1' }}>{steps}</Typography>
              <Typography sx={{ lineHeight: '1' }}>{t('steps')}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Pulse />
            <Stack direction="column">
              <Typography sx={{ lineHeight: '1' }}>{pulse}</Typography>
              <Typography sx={{ lineHeight: '1' }}>{t('pulse')}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
