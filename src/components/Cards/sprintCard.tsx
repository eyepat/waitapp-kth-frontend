import React, { useState, useEffect } from 'react';
import { Typography, Card, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';
import { useLanguage } from '../../contexts/LanguageContext';
import { trainingActivities } from '../../data/trainingActivities';
import { TrainingActivity } from '../../types';
import ProgressBar from '../ProgressBar';

interface SprintCardProps {
  day: number;
  rapa: number;
  week: number;
}

const SprintCardContainer = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  width: '90vw',
  maxWidth: '100%',
  color: 'black',
  backgroundColor: 'hsla(30, 10%, 96%, 1)',
  padding: '16px',
  marginBottom: '2vh',
  boxSizing: 'border-box',
});

const YouTubeFrame = styled('iframe')({
  width: '100%',
  height: '200px',
  borderRadius: '12px',
  marginTop: '16px',
});

const getActivities = (
  day: number,
  rapa: number,
  week: number
): TrainingActivity[] => {
  const key = `${day}-${rapa}-${week}`;
  return trainingActivities[key] || [
    {
      title: 'Rest Day',
      description: 'Take a break and relax.',
      videoUrl: '',
    },
  ];
};

const SprintCard: React.FC<SprintCardProps> = ({ day, rapa, week }) => {
  const { t } = useLanguage();
  const [activities, setActivities] = useState<TrainingActivity[]>([]);
  const [checkedStates, setCheckedStates] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchedActivities = getActivities(3, rapa, week);
    setActivities(fetchedActivities);

    // Initialize checked states for each activity
    setCheckedStates(new Array(fetchedActivities.length).fill(false));
  }, [day, rapa, week]);

  // Update progress bar based on checked activities
  const progress = Math.round(
    (checkedStates.filter((state) => state).length / activities.length) * 100
  );

  // Handle checkbox changes
  const handleCheckboxChange = (index: number) => {
    const updatedStates = [...checkedStates];
    updatedStates[index] = !updatedStates[index];
    setCheckedStates(updatedStates);
  };

  return (
    <SprintCardContainer>
      {activities.map((activity, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <Typography variant="h5" fontWeight="bold">
            {t(activity.title)}
          </Typography>
          <Typography variant="body1" marginTop="8px">
            {t(activity.description)}
          </Typography>
          {activity.videoUrl && (
            <YouTubeFrame
              src={activity.videoUrl}
              title={activity.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedStates[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            }
            label={t('Mark as Completed')}
          />
        </div>
      ))}
      <ProgressBar value={progress} label={`${progress}% Completed`} />
    </SprintCardContainer>
  );
};

export default SprintCard;
