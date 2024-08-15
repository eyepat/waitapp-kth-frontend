import { createContext, useContext, useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useLoading } from './LoadContext';
import { getMetricsByType, addMesurement as addMetric } from '../api/metrics';
import { useAuth } from './AuthContext';
import { useLanguage } from './LanguageContext';

interface MetricsContextType {
  height?: Height[];
  weight?: Weight[];
  bloodPressure?: BloodPressure[];
  waistSize?: WaistSize[];
  RAPA?: RAPA[];
  steps?: Steps[];
  getHistoricalMetricsByType?: (
    type:
      | 'height'
      | 'weight'
      | 'blood-pressure'
      | 'waist-size'
      | 'rapa'
      | 'steps'
  ) => void;
  addMeasurement?: (
    type:
      | 'height'
      | 'weight'
      | 'blood-pressure'
      | 'waist-size'
      | 'rapa'
      | 'steps',
    metric: Metric
  ) => void;
  update?: () => void;
  getLatestByType?: (
    type:
      | 'height'
      | 'weight'
      | 'blood-pressure'
      | 'waist-size'
      | 'rapa'
      | 'steps'
  ) => Metric | undefined;
}

const MetricsContext = createContext<MetricsContextType | undefined>(undefined);

export const useMetrics = () => {
  const context = useContext(MetricsContext);
  if (!context) {
    throw new Error('useSprintContext must be used within a SprintProvider');
  }
  return context;
};

export const MetricsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { loading, setLoading } = useLoading();
  const { token } = useAuth();
  const { t } = useLanguage();

  const [height, setHeight] = useState<Height[] | undefined>(undefined);
  const [weight, setWeight] = useState<Weight[] | undefined>(undefined);
  const [bloodPressure, setBloodPressure] = useState<
    BloodPressure[] | undefined
  >(undefined);
  const [waistSize, setWaistSize] = useState<WaistSize[] | undefined>(
    undefined
  );
  const [RAPA, setRAPA] = useState<RAPA[] | undefined>(undefined);
  const [steps, setSteps] = useState<Steps[] | undefined>(undefined);

  const types = [
    'height',
    'weight',
    'blood-pressure',
    'waist-size',
    'rapa',
    'steps',
  ];

  const updateAll = () => {
    types.map((type) => {
      if (
        type === 'height' ||
        type === 'weight' ||
        type === 'blood-pressure' ||
        type === 'waist-size' ||
        type === 'rapa' ||
        type === 'steps'
      )
        updateMetricsDataByType(type);
    });
  };

  useEffect(() => {
    updateAll();
  }, [token]);

  const updateMetricsDataByType = async (
    type:
      | 'height'
      | 'weight'
      | 'blood-pressure'
      | 'waist-size'
      | 'rapa'
      | 'steps'
  ) => {
    if (loading || token === undefined) return;

    let historicData: Metric[] = [];
    try {
      setLoading(true);
      const historicData = await getMetricsByType(type, token);

      switch (type) {
        case 'height':
          setHeight(historicData);
          break;
        case 'weight':
          setWeight(historicData);
          break;
        case 'blood-pressure':
          setBloodPressure(historicData as BloodPressure[]);
          break;
        case 'waist-size':
          setWaistSize(historicData);
          break;
        case 'rapa':
          setRAPA(historicData);
          break;
        case 'steps':
          setSteps(historicData);
          break;
        default:
          throw new Error('invalid-metric-type');
      }
    } catch (error) {
      if (error instanceof Error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
    } finally {
      setLoading(false);
    }

    return historicData;
  };

  const addMeasurment = async (
    type:
      | 'height'
      | 'weight'
      | 'blood-pressure'
      | 'waist-size'
      | 'rapa'
      | 'steps',
    metric: Metric
  ) => {
    if (loading || token === undefined) return;
    try {
      setLoading(true);
      await addMetric(type, token, metric);
      const newData = await getMetricsByType(type, token);

      switch (type) {
        case 'height':
          setHeight(newData as Height[]);
          break;
        case 'weight':
          setWeight(newData as Weight[]);
          break;
        case 'blood-pressure':
          setBloodPressure(newData as BloodPressure[]);
          break;
        case 'waist-size':
          setWaistSize(newData as WaistSize[]);
          break;
        case 'rapa':
          setRAPA(newData as RAPA[]);
          break;
        case 'steps':
          setSteps(newData as Steps[]);
          break;
        default:
          throw new Error('invalid-metric-type');
      }

      enqueueSnackbar(t('success-post'), {
        variant: 'success',
      });
    } catch (error) {
      if (error instanceof Error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
    } finally {
      setLoading(false);
    }
  };

  const getLatest = (metric: Metric[] | undefined) => {
    return metric !== undefined && metric.length > 0
      ? metric[metric.length - 1]
      : undefined;
  };

  const getLatestByType = (
    type:
      | 'height'
      | 'weight'
      | 'blood-pressure'
      | 'waist-size'
      | 'rapa'
      | 'steps'
  ) => {
    switch (type) {
      case 'height':
        return getLatest(height);
      case 'weight':
        return getLatest(weight);
      case 'blood-pressure':
        return getLatest(bloodPressure);
      case 'waist-size':
        return getLatest(height);
      case 'rapa':
        return getLatest(height);
      case 'steps':
        return getLatest(steps);
    }

    return undefined;
  };

  const value: MetricsContextType = {
    height: height,
    weight: weight,
    bloodPressure: bloodPressure,
    waistSize: waistSize,
    RAPA: RAPA,
    steps: steps,
    getHistoricalMetricsByType: updateMetricsDataByType,
    addMeasurement: addMeasurment,
    update: updateAll,
    getLatestByType: getLatestByType,
  };

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  );
};
