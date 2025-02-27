import { useSprintContext } from '../../contexts/SprintContext';
import { useLanguage } from '../../contexts/LanguageContext';
import TextCard from '../../components/Cards/TextCard';
import dayjs from 'dayjs';
import { enqueueSnackbar } from 'notistack';



// Helper function to get translated sprint type
const getSprintTypeText = (input: string, t: (key: string) => string): string => {
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

const getSprintMotivationText = (startDate: string, t: Function): string => {
    const dayOfSprint = dayjs().diff(dayjs(startDate, 'DD/MM/YYYY'), 'day') + 1; 
    console.log(dayOfSprint);
    return `${t('ongoing-sprint')} ${dayOfSprint}`; // Using the translation function inside the string
};

const ActiveSprintCard: React.FC = () => {
  const { sprint } = useSprintContext();
  const { t } = useLanguage();

  // Don't render if there's no active sprint
  if (!sprint) return null;

  return (
    <TextCard
    title={`${getSprintTypeText(sprint.sprintType, t)} ${t('sprint')} ${getSprintMotivationText(dayjs(sprint.startDate).format('DD/MM/YYYY'), t)}`}
    text={t('ongoing-sprint')}
      onClick={() => {
        enqueueSnackbar({
          variant: 'warning',
          message: t('this-function-is-wip'),
        });
      }}
    />
  );
};

export default ActiveSprintCard;
