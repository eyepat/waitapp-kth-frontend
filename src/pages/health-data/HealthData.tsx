import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import NavTab from '../../components/TabMenu/NavTab';
import NavTabs from '../../components/TabMenu/NavTabs';
import { ArrowRight } from '../../utils/Icons';
import MenuButton from '../../components/menuButton';
import { AddCircleOutline, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function HealthData() {
  const { t } = useLanguage();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [expandedCards, setExpandedCards] = React.useState({
    bloodPressure: false,
    weight: false,
  });

  const handleExpandClick = (card: keyof typeof expandedCards) => {
    setExpandedCards((prev) => ({
      ...prev,
      [card]: !prev[card],
    }));
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

          <CardContent sx={{ paddingTop: '0px' }}>
            <Typography>{`${t('recent-pressure')} currnetPulse mmHg. ${t('goal-pressure')} goalPulse mmHg`}</Typography>{' '}
            {/*Add pressure and goal pressure to render text properly.*/}
          </CardContent>

          <Collapse
            in={expandedCards.bloodPressure}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography>Graph</Typography> {/* Fix a graph here later */}
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
                    navigate('/blood-pressure-test');
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

          <CardContent sx={{ paddingTop: '0px' }}>
            <Typography>{`${t('recent-weight')} currentWeight kg. ${t('goal-weight')} goalWeight kg`}</Typography>{' '}
            {/*Add weight and goal weight to dispaly information properly*/}
          </CardContent>

          <Collapse in={expandedCards.weight} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>Graph</Typography> {/* Fix a graph here later */}
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
                    navigate('/weight-test');
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
      </Stack>
    );
  };

  //Very rough implementation at this point, in the future we need to check
  //if on going sprints exist, right now everything is hardcoded to look like figma.
  const renderSprintsContent = () => {
    return (
      <Stack sx={{ textAlign: 'left', alignItems: 'center' }}>
        <Typography marginTop={'20%'} width={'80%'} fontStyle={'italic'}>
          {t('sprint-text')}
        </Typography>
        <Button
          onClick={() => navigate('/sprint-choice')}
          sx={{
            marginTop: '25px',
            width: '60%',
            borderRadius: '10px',
            backgroundColor: 'hsla(200, 100%, 26%, 1)',
            '&:hover': {
              backgroundColor: 'hsla(200, 100%, 26%, 1)',
            },
            '&:active': {
              backgroundColor: 'hsla(200, 100%, 26%, 1)',
            },
          }}
          variant="contained"
          TouchRippleProps={{ style: { color: 'hsla(200, 100%, 6%, 1)' } }}
        >
          <Typography>{t('pick-new-sprint')}</Typography>
        </Button>
      </Stack>
    );
  };

  const renderTestsContent = () => {
    const tests = [
      {
        name: t('blood-pressure'),
        icon: <ArrowRight />,
        page: '/blood-pressure-test',
      },
      { name: t('weight'), icon: <ArrowRight />, page: '/weight-test' },
      {
        name: t('waist-measurement'),
        icon: <ArrowRight />,
        page: '/waist-measurement',
      },
      {
        name: t('test-for-physical-activity'),
        icon: <ArrowRight />,
        page: '/physical-activity-test',
      },
      { name: t('meal-control'), icon: <ArrowRight />, page: '/meal-control' },
    ];

    const randomTest =
      tests[
        Math.floor(Math.random() * tests.length)
      ]; /*Currently Random test every time u re-enter the tab. In the future update it to recommend the most urgent test.*/

    return (
      <Stack direction="column" margin="auto" paddingTop="30px" spacing={1}>
        <Stack direction="column" margin="auto" spacing={1}>
          <Typography marginBottom="1rem" alignSelf="left">
            {t('recommended-today')}
          </Typography>
          <MenuButton
            variant="contained"
            endIcon={randomTest.icon}
            onClick={() => {
              navigate(randomTest.page);
            }}
            sx={{
              backgroundColor: 'hsla(198, 26%, 92%, 1)',
              '&:hover': {
                backgroundColor: 'hsla(198, 26%, 92%, 1)',
              },
              '&:active': {
                backgroundColor: 'hsla(198, 26%, 92%, 1)',
              },
            }}
          >
            {randomTest.name}
          </MenuButton>
        </Stack>
        <Stack direction="column" margin="auto" paddingTop="30px" spacing={1}>
          <Typography marginBottom="1rem" alignSelf="left">
            {t('all-tests')}
          </Typography>
          {tests.map((test) => (
            <MenuButton
              key={test.name}
              variant="contained"
              endIcon={test.icon}
              onClick={() => {
                navigate(test.page);
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
    switch (value) {
      case 0:
        return renderOverviewContent();
      case 1:
        return renderSprintsContent();
      case 2:
        return renderTestsContent();
      default:
        return null;
    }
  };

  return (
    <Stack marginBottom="20%" alignItems="center">
      <Typography variant="h4" marginBottom="1rem" alignSelf="center">
        {t('your-healthdata')}
      </Typography>
      <Stack width={'90%'} paddingTop={'10px'}>
        <NavTabs value={value} onChange={handleChange} centered>
          <NavTab label={t('overview')} />
          <NavTab label={t('sprints')} />
          <NavTab label={t('tests')} />
        </NavTabs>
        {renderTabContent()}
      </Stack>
    </Stack>
  );
}
