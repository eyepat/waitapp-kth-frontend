import React, { useState, useEffect } from 'react';
import { Typography, Card } from '@mui/material';
import { styled } from '@mui/system';
import { useLanguage } from '../../contexts/LanguageContext';
import { trainingActivities } from '../../data/trainingActivities';
import { TrainingActivity } from '../../types';

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

const getActivity = (
  day: number,
  rapa: number,
  week: number
): TrainingActivity => {
  const key = `${day}-${rapa}-${week}`;
  return (
    trainingActivities[key] || {
      title: 'Rest Day',
      description: 'Take a break and relax.',
      videoUrl: '',
    }
  );
};

const SprintCard: React.FC<SprintCardProps> = ({ day, rapa, week }) => {
  const { t } = useLanguage();
  const [activity, setActivity] = useState<TrainingActivity | null>(null);

  useEffect(() => {
    const fetchedActivity = getActivity(day, rapa, week);
    setActivity(fetchedActivity);
  }, [day, rapa, week]);

  return (
    <SprintCardContainer>
      <Typography variant="h5" fontWeight="bold">
        {t(activity?.title || 'Rest Day')}
      </Typography>
      <Typography variant="body1" marginTop="8px">
        {t(activity?.description || 'Take a break and relax.')}
      </Typography>
      {activity?.videoUrl && (
        <YouTubeFrame
          src={activity.videoUrl}
          title={activity.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </SprintCardContainer>
  );
};

export default SprintCard;
