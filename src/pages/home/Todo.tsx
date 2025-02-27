import { Stack } from '@mui/material';
import TextCard from '../../components/Cards/TextCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useSprintContext } from '../../contexts/SprintContext';
import { useRAPAContext } from '../../contexts/MetricsContext';
import { useEffect, useState } from 'react';

export default function Todo() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { getLatest } = useRAPAContext();
  const { sprint } = useSprintContext();
  const [userHasNotMeasuredRAPA, setUserHasNotMeasuredRAPA] = useState<
    boolean | undefined
  >(undefined);
  const [userDoesNotHaveAnActiveSprint, setUserDoesNotHaveAnActiveSprint] =
    useState<boolean | undefined>(undefined);
  useEffect(() => {
    getLatest().then((r) => {
      if (r !== undefined) {
        setUserHasNotMeasuredRAPA(false);
      } else {
        setUserHasNotMeasuredRAPA(true);
      }
    });
  }, []);
  useEffect(() => {
    if (sprint !== undefined) {
      setUserDoesNotHaveAnActiveSprint(false);
    } else {
      setUserDoesNotHaveAnActiveSprint(true);
    }
  }, [sprint]);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignSelf="center"
      gap="3"
    >
      {userHasNotMeasuredRAPA !== undefined && userHasNotMeasuredRAPA && (
        <TextCard
          title={t('measure-rapa')}
          text={t('find-out-your-rapa')}
          onClick={() => {
            navigate('/settings/forms/rapa');
          }}
          sx={{
            background: '#00a3e050',
            maxWidth: '800px',
            '&:hover': { background: '#00a3e090' },
          }}
        />
      )}
      {userDoesNotHaveAnActiveSprint !== undefined &&
        !userDoesNotHaveAnActiveSprint && (
          <TextCard
            title={
              t('user-has-active-sprint-of-type') +
              ' ' +
              sprint?.sprintType +
              ' ' +
              t('user-has-active-sprint-of-type')
            }
            text={t('desc')}
            onClick={() => {
              navigate('/sprint');
            }}
            sx={{
              background: '#00a3e050',
              maxWidth: '800px',
              '&:hover': { background: '#00a3e090' },
            }}
          />
        )}
      {userDoesNotHaveAnActiveSprint !== undefined &&
        userDoesNotHaveAnActiveSprint && (
          <TextCard
            title={t('no-active-sprint-home')}
            text={''}
            onClick={() => {
              navigate('/sprint/choice');
            }}
            sx={{
              background: '#00a3e050',
              maxWidth: '800px',
              '&:hover': { background: '#00a3e090' },
            }}
          />
        )}
    </Stack>
  );
}
