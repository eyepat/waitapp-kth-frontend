import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  Box,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import NavTab from '../../components/TabMenu/NavTab';
import NavTabs from '../../components/TabMenu/NavTabs';
import { ArrowRight } from '../../utils/Icons';
import MenuButton from '../../components/MenuButton';
import { AddCircleOutline, ExpandMore } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import theme from '../../components/Theme';
import { WipPopUp } from '../../components/PopUps/WipPopUp';
import Graph, { GraphMode } from './Graph';
import Sprints from './Sprints';
import {
  useBloodPressureContext,
  useHeightContext,
  useRAPAContext,
  useStepsContext,
  useWaistSizeContext,
  useWeightContext,
} from '../../contexts/MetricsContext';

export default function HealthData() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { tab = 'overview' } = useParams();
  const [selectedTab, setSelectedTab] = useState(tab);
  const [openWip, setOpenWip] = useState(false);

  function handleOpenWip() {
    setOpenWip(true);
  }

  function handleCloseWip() {
    setOpenWip(false);
  }

  useEffect(() => {
    setSelectedTab(tab);
  }, [tab]);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(`/health-data/${newValue}`);
    setSelectedTab(newValue);
  };

  const [expandedCards, setExpandedCards] = React.useState({
    bloodPressure: true,
    weight: true,
    waistSize: true,
  });

  const handleExpandClick = (card: keyof typeof expandedCards) => {
    setExpandedCards((prev) => ({
      ...prev,
      [card]: !prev[card],
    }));
  };

  const LatestMetric = ({
    metric,
  }: {
    metric:
      | 'height'
      | 'weight'
      | 'blood-pressure'
      | 'waist-size'
      | 'rapa'
      | 'steps';
  }) => {
    const [value, setValue] = useState<number | string>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const { getLatest: getLatestHeight } = useHeightContext();
    const { getLatest: getLatestWeight } = useWeightContext();
    const { getLatest: getLatestBloodPressure } = useBloodPressureContext();
    const { getLatest: getLatestWaistSize } = useWaistSizeContext();
    const { getLatest: getLatestSteps } = useStepsContext();
    const { getLatest: getLatestRAPA } = useRAPAContext();

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        let result: number | string | null = null;

        try {
          switch (metric) {
            case 'height': {
              const latest = await getLatestHeight();
              result = latest?.value ?? 0;
              break;
            }
            case 'weight': {
              const latest = await getLatestWeight();
              result = latest?.value ? parseFloat(latest.value.toFixed(2)) : 0;
              break;
            }
            case 'blood-pressure': {
              const latest = await getLatestBloodPressure();
              result = latest?.value ?? 0;
              break;
            }
            case 'waist-size': {
              const latest = await getLatestWaistSize();
              result = latest?.value ?? 0;
              break;
            }
            case 'rapa': {
              const latest = await getLatestRAPA();
              result = latest?.value ?? 0;
              break;
            }
            case 'steps': {
              const latest = await getLatestSteps();
              result = latest?.value ?? 0;
              break;
            }
            default: {
              result = 0;
              break;
            }
          }

          setValue(result);
        } catch (error) {
          console.error(`Error fetching ${metric} data:`, error);
          setValue(0);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [metric]);

    return (
      <Box fontWeight="bold" display="inline">
        {loading ? 'Loading...' : value}
      </Box>
    );
  };

  const goalBloodPressure = '120/80';
  const goalWeight = 65;
  const goalWaist = 50;

  const GoalWeight = () => {
    const { getLatest, latest } = useWeightContext();
    const [diff, setDiff] = useState<number | undefined>(undefined);

    useEffect(() => {
      const fetchLatest = async () => {
        const latestWeight = latest?.value ?? (await getLatest())?.value;
        if (latestWeight !== undefined) {
          let calculatedDiff = Number(latestWeight) - goalWeight;
          calculatedDiff = Math.round(calculatedDiff * 10) / 10;
          setDiff(Number.isNaN(calculatedDiff) ? undefined : calculatedDiff);
        }
      };

      fetchLatest();
    }, [latest, getLatest, goalWeight]);

    return (
      <>
        {diff !== undefined && diff < 0 ? t('gain-weight') : t('lose-weight')}
        <Box fontWeight="bold" display="inline">
          {' ' + (diff === undefined ? '0' : Math.abs(diff))}
        </Box>
        {' kg'}
      </>
    );
  };

  const renderOverviewContent = () => {
    return (
      <Stack marginTop={'25px'}>
        <Card sx={{ borderRadius: '12px' }}>
          <CardHeader
            title={
              <Typography variant="body1" fontWeight="bold">
                {t('blood-pressure')}
              </Typography>
            }
            sx={{ paddingBottom: '0px' }}
          />

          <CardContent sx={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <Typography component="div">
              {t('recent-pressure')} <LatestMetric metric={'blood-pressure'} />{' '}
              {`mmHg. ${t('goal-pressure')} ${goalBloodPressure} mmHg`}
            </Typography>
          </CardContent>

          <Collapse
            in={expandedCards.bloodPressure}
            timeout="auto"
            unmountOnExit
          >
            <CardContent style={{ padding: '0' }}>
              <Typography marginTop={'1vh'} marginLeft={'2vh'} fontWeight={700}>
                {t('systolic')}
              </Typography>
              <Graph mode={GraphMode.Systolic} />
              <Typography marginLeft={'2vh'} fontWeight={700}>
                {t('diastolic')}
              </Typography>
              <Graph mode={GraphMode.Diastolic} />
            </CardContent>
          </Collapse>

          <CardActions disableSpacing>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ borderRadius: '10px' }}
                  endIcon={<AddCircleOutline />}
                  onClick={() => {
                    navigate('/health-data/overview/blood-pressure-test');
                  }}
                >
                  <Typography>{t('new-measurment')}</Typography>
                </Button>
              </Grid>
              <Grid item>
                <ExpandMore
                  onClick={() => handleExpandClick('bloodPressure')}
                  aria-expanded={expandedCards.bloodPressure}
                  aria-label="show more"
                  style={{
                    transform: expandedCards.bloodPressure
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Card>

        <Card sx={{ marginTop: '30px', borderRadius: '12px' }}>
          <CardHeader
            title={
              <Typography variant="body1" fontWeight="bold">
                {t('weight')}
              </Typography>
            }
            sx={{ paddingBottom: '0px' }}
          />

          <CardContent sx={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <Typography component="div">
              {t('recent-weight')} <LatestMetric metric={'weight'} />{' '}
              {`kg. ${t('goal-weight')} `} <GoalWeight />
            </Typography>
            {/*Add weight and goal weight to dispaly information properly*/}
          </CardContent>

          <Collapse in={expandedCards.weight} timeout="auto" unmountOnExit>
            <CardContent style={{ padding: '0' }}>
              <Graph mode={GraphMode.Weight} />
            </CardContent>
          </Collapse>

          <CardActions disableSpacing>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ borderRadius: '10px' }}
                  endIcon={<AddCircleOutline />}
                  onClick={() => {
                    navigate('/health-data/overview/weight-test');
                  }}
                >
                  <Typography>{t('new-measurment')}</Typography>
                </Button>
              </Grid>
              <Grid item>
                <ExpandMore
                  onClick={() => handleExpandClick('weight')}
                  aria-expanded={expandedCards.weight}
                  aria-label="show more"
                  style={{
                    transform: expandedCards.weight
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Card>

        <Card sx={{ marginTop: '30px', borderRadius: '12px' }}>
          <CardHeader
            title={
              <Typography variant="body1" fontWeight="bold">
                {t('waist-measurement')}
              </Typography>
            }
            sx={{ paddingBottom: '0px' }}
          />

          <CardContent sx={{ paddingTop: '0px' }}>
            <Typography component="div">
              {t('recent-waist')} <LatestMetric metric={'waist-size'} />{' '}
              {`cm. ${t('goal-waist')} ${goalWaist} cm`}
            </Typography>
            {/*Add pressure and goal pressure to render text properly.*/}
          </CardContent>

          <Collapse in={expandedCards.waistSize} timeout="auto" unmountOnExit>
            <CardContent style={{ padding: '0' }}>
              <Graph mode={GraphMode.WaistSize} />
            </CardContent>
          </Collapse>

          <CardActions disableSpacing>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ borderRadius: '10px' }}
                  endIcon={<AddCircleOutline />}
                  onClick={() => {
                    navigate('/health-data/overview/waist-size-test');
                  }}
                >
                  <Typography>{t('new-measurment')}</Typography>
                </Button>
              </Grid>
              <Grid item>
                <ExpandMore
                  onClick={() => handleExpandClick('waistSize')}
                  aria-expanded={expandedCards.waistSize}
                  aria-label="show more"
                  style={{
                    transform: expandedCards.waistSize
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Card>

        <Typography
          variant="subtitle2"
          textAlign="center"
          color="grey"
          sx={{ paddingTop: '2vh' }}
        >
          {t('more-results-to-come')}
        </Typography>
        <Typography variant="subtitle2" textAlign="center" color="grey">
          {t('during-your-journey')}
        </Typography>
      </Stack>
    );
  };

  const renderTestsContent = () => {
    const tests = [
      {
        name: t('blood-pressure'),
        icon: <ArrowRight />,
        onClick: () => navigate('/health-data/tests/blood-pressure-test'),
      },
      {
        name: t('weight'),
        icon: <ArrowRight />,
        onClick: () => navigate('/health-data/tests/weight-test'),
      },
      {
        name: t('waist-measurement'),
        icon: <ArrowRight />,
        onClick: () => navigate('/health-data/tests/waist-size-test'),
      },
      {
        name: t('test-for-physical-activity'),
        icon: <ArrowRight />,
        onClick: handleOpenWip,
      },
      {
        name: t('meal-control'),
        icon: <ArrowRight />,
        onClick: handleOpenWip,
      },
    ];

    // Function to get a pseudo-random index based on the current date (maybe they dont want it to be random but now it is :))
    const getRandomIndexForDay = (max: number) => {
      const now = new Date();
      const seed =
        now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate(); // YYYYMMDD format
      return seed % max;
    };

    const randomTestIndex = getRandomIndexForDay(tests.length);
    const randomTest = tests[randomTestIndex];

    return (
      <Stack direction="column" paddingTop="30px" spacing={1}>
        <Stack direction="column" spacing={1}>
          <Typography marginBottom="1rem" alignSelf="left">
            {t('recommended-today')}
          </Typography>
          <MenuButton
            variant="contained"
            endIcon={randomTest.icon}
            onClick={randomTest.onClick}
            sx={{
              backgroundColor: 'hsla(198, 29%, 84%, 1)',
              '&:hover': {
                backgroundColor: 'hsla(198, 29%, 74%, 1)',
              },
              '&:active': {
                backgroundColor: 'hsla(198, 29%, 74%, 1)',
              },
            }}
          >
            {randomTest.name}
          </MenuButton>
        </Stack>
        <Stack direction="column" paddingTop="30px" spacing={1}>
          <Typography marginBottom="1rem" alignSelf="left">
            {t('all-tests')}
          </Typography>
          {tests.map((test) => (
            <MenuButton
              key={test.name}
              variant="contained"
              endIcon={test.icon}
              onClick={test.onClick}
              sx={{
                backgroundColor: 'hsla(198, 10%, 89%, 1)',
                '&:hover': {
                  backgroundColor: 'hsla(198, 10%, 79%, 1)',
                },
                '&:active': {
                  backgroundColor: 'hsla(198, 10%, 79%, 1)',
                },
              }}
            >
              {test.name}
            </MenuButton>
          ))}
        </Stack>
      </Stack>
    );
  };

  const renderTabContent = () => {
    switch (tab) {
      case 'overview':
        return renderOverviewContent();
      case 'sprints':
        return <Sprints />;
      case 'tests':
        return renderTestsContent();
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack marginBottom="20%" alignItems="center">
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('your-healthdata')}
        </Typography>
        <Stack width={'90%'} paddingTop={'10px'}>
          <NavTabs value={selectedTab} onChange={handleChange} centered>
            <NavTab value="overview" label={t('overview')} />
            <NavTab value="sprints" label={t('sprints')} />
            <NavTab value="tests" label={t('measurements')} />
          </NavTabs>
          {renderTabContent()}
        </Stack>
      </Stack>
      <WipPopUp open={openWip} onClose={handleCloseWip} />
    </ThemeProvider>
  );
}
