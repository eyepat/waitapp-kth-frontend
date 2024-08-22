import { Button, Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useSprintContext } from '../../contexts/SprintContext';
import TextCard from '../../components/Cards/TextCard';
import { enqueueSnackbar } from 'notistack';

const getSprintTypeText: (input: string) => string = (input) => {
  const { t } = useLanguage();
  switch (input) {
    case 'PHYSICAL':
      return t('physical-activity');
    case 'FOOD':
      return t('food-habits');
    case 'ALCOHOL':
      return t('alcohol-habits');
    default:
      return t('unknown-sprint-type');
  }
};

export default function Sprints() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { sprint, sprints } = useSprintContext();

  return (
    <Stack
      sx={{ textAlign: 'left', alignItems: 'center' }}
      spacing={2}
      mt={sprints !== undefined ? '2rem' : ''}
    >
      {((sprints !== undefined && sprints.length <= 0) ||
        sprints === undefined) && (
        <Typography marginTop={'20%'} width={'80%'} fontStyle={'italic'}>
          {t('sprint-text')}
        </Typography>
      )}
      {sprint !== undefined && (
        <>
          <TextCard
            title={
              getSprintTypeText(sprint.type) +
              ' ' +
              t('sprint') +
              ' ' +
              new Date(sprint.startDate).getDate() +
              '-' +
              new Date(sprint.endDate).getDate()
            }
            text={t('ongoing-sprint')}
            onClick={() =>
              enqueueSnackbar({
                variant: 'warning',
                message: t('this-function-is-wip'),
              })
            }
          />
          <Divider color="black" sx={{ mt: '5vh' }} variant="fullWidth">
            {t('previous-sprints')}
          </Divider>
        </>
      )}
      {sprints !== undefined &&
        sprints?.map(
          (sprint_) =>
            sprint !== undefined &&
            sprint_.id !== sprint.id && (
              <TextCard
                title={
                  getSprintTypeText(sprint_.type) +
                  ' ' +
                  t('sprint') +
                  ' ' +
                  new Date(sprint_.startDate).getDate() +
                  '-' +
                  new Date(sprint_.endDate).getDate()
                }
                text={
                  (sprint_.isCompleted
                    ? t('you-have-completed-this-sprint')
                    : t('this-sprint-has-passed')) +
                  ' ' +
                  t('click-here-to-see-results')
                }
                onClick={() =>
                  enqueueSnackbar({
                    variant: 'warning',
                    message: t('this-function-is-wip'),
                  })
                }
              />
            )
        )}
      <Button
        onClick={() => navigate('/sprint/choice')}
        disabled={sprint !== undefined}
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
}
