import { Button, Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useSprintContext } from '../../contexts/SprintContext';
import TextCard from '../../components/Cards/TextCard';
import { WipPopUp } from '../../components/PopUps/WipPopUp';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

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
  const [openWip, setOpenWip] = useState(false);
  const { sprint, sprints } = useSprintContext();

  function handleOpenWip() {
    setOpenWip(true);
  }

  function handleCloseWip() {
    setOpenWip(false);
  }

  useEffect(() => {
    console.log(sprints);
  }, [sprints]);

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
              getSprintTypeText(sprint.sprintType) +
              ' ' +
              t('sprint') +
              ' ' +
              dayjs(sprint?.startDate).format('DD/MM/YYYY')
            }
            text={t('ongoing-sprint')}
            onClick={() => {
              enqueueSnackbar({
                variant: 'warning',
                message: t('this-function-is-wip'),
              });
              handleOpenWip();
            }}
          />
          <Divider color="black" sx={{ mt: '5vh' }} variant="fullWidth">
            {t('previous-sprints')}
          </Divider>
        </>
      )}
      {sprints !== undefined &&
        sprints?.map(
          (sprint_) =>
            sprint_ !== undefined &&
            sprint_.id !== sprint?.id && (
              <TextCard
                title={
                  getSprintTypeText(sprint_.sprintType) +
                  ' ' +
                  t('sprint') +
                  ' ' +
                  dayjs(sprint_.startDate).format('DD/MM/YYYY')
                }
                text={
                  (sprint_.completed
                    ? t('you-have-completed-this-sprint')
                    : t('this-sprint-has-passed')) +
                  ' ' +
                  t('click-here-to-see-results')
                }
                onClick={() => {
                  enqueueSnackbar({
                    variant: 'warning',
                    message: t('this-function-is-wip'),
                  });
                  handleOpenWip();
                }}
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
      <WipPopUp open={openWip} onClose={handleCloseWip} />
    </Stack>
  );
}
