import { useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';
import {
  useBloodPressureContext,
  useWaistSizeContext,
  useWeightContext,
} from '../../contexts/MetricsContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { BloodPressure, Scale } from '../../utils/Icons';

const MeasurementCard = () => {
  const { t } = useLanguage();
  const { getLatest: getBP, latest: bpLatest } = useBloodPressureContext();
  const { getLatest: getWeight, latest: weightLatest } = useWeightContext();
  const { getLatest: getWaistSize, latest: waistSizeLatest } =
    useWaistSizeContext();

  useEffect(() => {
    if (!bpLatest) getBP();
    if (!weightLatest) getWeight();
    if (!waistSizeLatest) getWaistSize();
  }, [bpLatest, weightLatest, waistSizeLatest]);

  return (
    <Card
      sx={{
        background: 'none',
        boxShadow: 'none',
        height: 'clamp(200px, 20vh, auto)',
      }}
    >
      <CardContent>
        <Typography variant="caption" lineHeight={3} gutterBottom>
          {t('latest-result')}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          {bpLatest && (
            <Grid item xs={12} display="flex" alignItems="center" gap={2}>
              <BloodPressure />
              <Typography variant="caption">
                {t('blood-pressure')}: {bpLatest.value} mmHg
              </Typography>
            </Grid>
          )}
          {weightLatest && (
            <Grid item xs={12} display="flex" alignItems="center" gap={2}>
              <Scale />
              <Typography variant="caption">
                {t('weight')}: {weightLatest.value} kg
              </Typography>
            </Grid>
          )}
          {waistSizeLatest && (
            <Grid item xs={12} display="flex" alignItems="center" gap={2}>
              <StraightenIcon sx={{ width: 30, height: 32 }} />

              <Typography variant="caption">
                {t('waist-measurement')}: {waistSizeLatest.value} cm
              </Typography>
            </Grid>
          )}
          {!bpLatest && !weightLatest && !waistSizeLatest && (
            <Typography variant="caption" color="textSecondary">
              {t('no-measurements-available')}
            </Typography>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MeasurementCard;
