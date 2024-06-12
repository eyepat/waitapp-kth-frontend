import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import NavTab from '../../components/TabMenu/NavTab';
import NavTabs from '../../components/TabMenu/NavTabs';
import { ArrowRight } from '../../utils/Icons';
import MenuButton from '../../components/menuButton';

export default function HealthData() {
  const { t } = useLanguage();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderOverviewContent = () => {
    return <div>{t('overview content')}</div>;
  };

  const renderSprintsContent = () => {
    return <div>{t('sprints content')}</div>;
  };

  const renderTestsContent = () => {
    return (
      <Stack direction="column" margin="auto" paddingTop="30px" spacing={1}>
        <Typography marginBottom="1rem" alignSelf="left">
          {t('All-tests')}
        </Typography>
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('blood-pressure')}
        </MenuButton>
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('weight')}
        </MenuButton>
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('waist-measurement')}
        </MenuButton>
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('test-for-physical-activity')}
        </MenuButton>
        <MenuButton variant="contained" endIcon={<ArrowRight />}>
          {t('meal-control')}
        </MenuButton>
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
