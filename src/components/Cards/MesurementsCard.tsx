import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent, Typography, Grid, Stack } from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';
import {
  useBloodPressureContext,
  useWaistSizeContext,
  useWeightContext,
  useHeightContext,
} from '../../contexts/MetricsContext';
import { Gender } from '../../api/BaseClient';
import { useLanguage } from '../../contexts/LanguageContext';
import { BloodPressure, Scale } from '../../utils/Icons';

const MeasurementCard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { getLatest: getBP, latest: bpLatest } = useBloodPressureContext();
  const { getLatest: getWeight, latest: weightLatest } = useWeightContext();
  const { getResources: getWeights, resources: weights } = useWeightContext();
  const { getLatest: getHeight, latest: height } = useHeightContext();
  const { getLatest: getWaistSize, latest: waistSizeLatest } =
    useWaistSizeContext();

  useEffect(() => {
    if (!bpLatest) getBP();
    if (!weightLatest) getWeight();
    if (!weights) getWeights();
    if (!height) getHeight();
    if (!waistSizeLatest) getWaistSize();
  }, [bpLatest, weightLatest, weights, height, waistSizeLatest]);

  const calcTargetWeight = (
    firstWeight: number | undefined,
    height: number | undefined
  ): number | undefined => {
    if (!firstWeight || !height) return undefined;
    const target_weight = (27 * height * height) / 10000;
    if (target_weight < firstWeight * 0.9) return Math.round(firstWeight * 0.9);
    return Math.round(target_weight);
  };

  const calcTargetWaist = (gender: Gender | undefined): number | undefined => {
    if (!gender) return undefined;
    if (gender == 'MALE') return 102;
    return 88;
  };

  return (
    <Card
      sx={{
        background: 'none',
        boxShadow: 'none',
        height: 'clamp(200px, 20vh, auto)',
      }}
    >
      <CardContent>
        <Typography variant="h5" lineHeight={2} gutterBottom>
          {t('latest-result')}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          {bpLatest && (
            <Grid item xs={12} display="flex" alignItems="center" gap={2}>
              <BloodPressure />
              <Stack>
                <Typography variant="body1">
                  {t('blood-pressure')}: {bpLatest.value} mmHg
                </Typography>
                <Typography variant="caption">
                  {t('target')}: 130/85 mmHg
                </Typography>
              </Stack>
            </Grid>
          )}
          {weightLatest && (
            <Grid item xs={12} display="flex" alignItems="center" gap={2}>
              <Scale />
              <Stack>
                <Typography variant="body1">
                  {t('weight')}: {weightLatest.value} kg
                </Typography>
                <Typography variant="caption">
                  {t('target')}:{' '}
                  {calcTargetWeight(weights?.at(0)?.value, height?.value)} kg
                </Typography>
              </Stack>
            </Grid>
          )}
          {waistSizeLatest && (
            <Grid item xs={12} display="flex" alignItems="center" gap={2}>
              <StraightenIcon sx={{ width: 60, height: 64 }} />
              <Stack>
                <Typography variant="body1">
                  {t('waist-measurement')}: {waistSizeLatest.value} cm
                </Typography>
                <Typography variant="caption">
                  {t('target')}: {calcTargetWaist(user?.gender)} cm
                </Typography>
              </Stack>
            </Grid>
          )}
          {!bpLatest && !weightLatest && !waistSizeLatest && (
            <Typography variant="body1" color="textSecondary">
              {t('no-measurements-available')}
            </Typography>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MeasurementCard;
