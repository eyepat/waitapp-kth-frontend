import { useState, useEffect } from 'react';
import { Typography, Card, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';
import { useLanguage } from '../../contexts/LanguageContext';
import ProgressBar from '../ProgressBar';
import { SprintActivityDTO, SprintDTO } from '../../api/BaseClient';
import ConfettiExplosion from 'react-confetti-explosion';
import { useResource } from '../../contexts/ResourceContext';

interface SprintCardProps {
  index: number;
  sprint: SprintDTO;
  today: boolean;
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
  height: '100%',
  minHeight: '25vh',
  borderRadius: '12px',
  marginTop: '16px',
});

export default function SprintCard({ index, sprint }: SprintCardProps) {
  const { t } = useLanguage();
  const { completeSprintActivityWithoutUpdatingCache: completeSprintActivity } =
    useResource();
  const [checked, setChecked] = useState<boolean>(false);
  const [initial, setInitial] = useState<SprintActivityDTO | undefined>(
    undefined
  );

  useEffect(() => {
    if (sprint.activities && sprint.activities[index] && initial == undefined) {
      setInitial(sprint.activities[index]);
      setChecked(sprint.activities[index]?.completed || false);
    }
  }, [sprint, index]);

  const handleCheckboxChange = () => {
    if (sprint.activities?.[index].id == undefined) return;
    const preCheckState = checked;
    completeSprintActivity(sprint.activities[index].id, !preCheckState).catch(
      (_) => {
        // on error revert back to previous state
        setChecked(preCheckState);
      }
    );
    setChecked(!preCheckState);
  };

  const activity = sprint.activities?.[index];

  if (!activity) return null;

  return (
    <SprintCardContainer>
      {checked && !initial?.completed && <ConfettiExplosion />}
      <div style={{ marginBottom: '16px' }}>
        <Typography variant="h6" fontWeight="bold">
          {t(activity?.task?.title || '')}
        </Typography>
        <Typography variant="body1" marginTop="8px">
          {t(activity?.task?.description || '')}
        </Typography>
        {activity?.task?.videoURL && (
          <YouTubeFrame
            src={activity?.task?.videoURL}
            title={activity?.task?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
          }
          label={t('mark-as-completed')}
        />
      </div>
      <ProgressBar
        value={checked ? 100 : 0}
        label={`${checked ? 100 : 0}% Completed`}
      />
    </SprintCardContainer>
  );
}
