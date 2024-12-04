import React, { useState, useEffect } from 'react';
import { Typography, Card } from '@mui/material';
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

  useEffect(() => {
    const fetchedActivities = getActivities(day, rapa, week);
    setActivities(fetchedActivities);
  }, [day, rapa, week]);

  return (
    <SprintCardContainer>
      {activities.map((activity, index) => (
        <div key={index}>
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
        </div>

      ))}
      <ProgressBar percentage={65} />
    </SprintCardContainer>
  );
};

export default SprintCard;
