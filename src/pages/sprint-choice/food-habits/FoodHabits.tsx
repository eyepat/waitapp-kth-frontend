import { CardMedia, Stack, Typography } from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import React, { useState } from 'react';
import foodBackground from '../../../assets/backgrounds/foodBackground.jpg';
import NavTab from '../../../components/TabMenu/NavTab';
import NavTabs from '../../../components/TabMenu/NavTabs';

export default function FoodHabits() {
  const { t } = useLanguage();
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack alignItems="center">
      <CardMedia
        component="img"
        image={foodBackground}
        alt="Food Background"
        sx={{
          transform: 'scaleX(-1)',
          minwidth: '100vw',
          maxWidth: '1000px',
          height: '26.75vh',
          top: 0,
          left: 0,
          position: 'absolute',
          '@media (min-width: 1000px)': {
            left: 'auto',
          },
          filter: 'brightness(65%)',
        }}
      />
      <Stack
        direction="column"
        justifyContent="flex-end"
        sx={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <Stack
          sx={{
            boxDecoration: 'underline',
            paddingTop: '8vh',
            paddingLeft: '2vh',
          }}
        >
          <Typography
            color="white"
            textAlign="left"
            variant="h4"
            style={{ textTransform: 'uppercase' }}
          >
            {t('food-habits')}
          </Typography>
          <Typography
            color="white"
            textAlign="left"
            variant="h4"
            style={{ textTransform: 'uppercase' }}
          >
            {t('sprint')}
          </Typography>
        </Stack>
      </Stack>
      <Stack width={'90%'} paddingTop={'3vh'}>
        <Typography>{t('goal-level')}</Typography>
        <NavTabs value={value} onChange={handleChange} centered>
          <NavTab label={t('low')} />
          <NavTab label={t('medium')} />
          <NavTab label={t('high')} />
        </NavTabs>
      </Stack>
    </Stack>
  );
}
