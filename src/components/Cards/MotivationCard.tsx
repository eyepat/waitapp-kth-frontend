import { useSprintContext } from '../../contexts/SprintContext';
import { useLanguage } from '../../contexts/LanguageContext';
import TextCard from './TextCard';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const getSprintMotivationText = (startDate: string, t: Function): string => {
    const dayOfSprint = dayjs().diff(dayjs(startDate, 'DD/MM/YYYY'), 'day') + 1; 
    console.log(dayOfSprint);
    return `${t('motivation-text-pre-day')} ${dayOfSprint} ${t('motivation-text-post-day')}`; // Using the translation function inside the string
};

const ActiveSprintCard: React.FC = () => {
  const navigate = useNavigate();
  const { sprint } = useSprintContext();
  const { t } = useLanguage();

  // Don't render if there's no active sprint
  if (!sprint) return (
    <TextCard
    title={`${t('no-active-sprint-home')}`}
    text={``}
    onClick={() => navigate('/sprint/choice')}
    />
  );

  return (
    <TextCard
    title={`${getSprintMotivationText(dayjs(sprint.startDate).format('DD/MM/YYYY'), t)}`}
    text={`${t('go-to-sprint')}`}
    onClick={() => navigate('/sprint')}
    />
  );
};

export default ActiveSprintCard;
