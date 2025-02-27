import { Stack } from '@mui/material';
import TextCard from '../../components/Cards/TextCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useSprintContext } from '../../contexts/SprintContext';
import { useRAPAContext } from '../../contexts/MetricsContext';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const getSprintMotivationText = (startDate: string, t: Function): string => {
  const dayOfSprint = dayjs().diff(dayjs(startDate, 'DD/MM/YYYY'), 'day') + 1;

  return `${t('motivation-text-pre-day')} ${dayOfSprint} ${(dayOfSprint === 1 ? t('day') : t('days')) + ' ' + t('motivation-text-post-day')}`;
};

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
      spacing={2}
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
        !userDoesNotHaveAnActiveSprint &&
        sprint != undefined && (
          <TextCard
            title={t('sprint')}
            text={`${getSprintMotivationText(dayjs(sprint.startDate).format('DD/MM/YYYY'), t)}`}
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
