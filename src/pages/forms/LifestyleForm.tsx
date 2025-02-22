import { useState } from 'react';
import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useSprintContext } from '../../contexts/SprintContext';

interface Question {
  id: number;
  key: string;
  options: string[];
}

export default function LifestyleForm() {
  const questions: Question[] = [
    {
      id: 1,
      key: 'sleep_schedule',
      options: ['before_10pm', 'between_10pm_12am', 'after_12am']
    },
    {
      id: 2,
      key: 'exercise_frequency',
      options: ['daily', 'three_to_five_weekly', 'one_to_two_weekly', 'rarely']
    },
    {
      id: 3,
      key: 'meal_preparation',
      options: ['cook_most_meals', 'mix_cooking_takeout', 'mostly_takeout']
    },
    {
      id: 4,
      key: 'work_life_balance',
      options: ['excellent', 'good', 'fair', 'poor']
    },
    {
      id: 5,
      key: 'stress_level',
      options: ['low', 'moderate', 'high']
    }
  ];

  const { t } = useLanguage();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const { user } = useAuth();
  const { sprint } = useSprintContext();

  const addMeasurement = (type: string, obj: any) => {
    console.log('todo', type, obj);
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors: { [key: string]: boolean } = {};

    questions.forEach((question) => {
      if (!answers[`question-${question.id}`]) {
        formIsValid = false;
        newErrors[`question-${question.id}`] = true;
      }
    });

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (user?.id !== undefined && addMeasurement !== undefined) {
        // Calculate some kind of score or just send raw answers
        addMeasurement('lifestyle', {
          value: JSON.stringify(answers),
          userID: user?.id ?? 0,
          sprintID: sprint?.id ?? null,
          timeStamp: null,
        });
        enqueueSnackbar('lifestyle-form-submitted', {
          variant: 'success',
        });
        navigate('/');
      } else {
        enqueueSnackbar('could-not-submit-lifestyle-form', {
          variant: 'error',
        });
      }
    } else {
      enqueueSnackbar('missed-questions-error', {
        variant: 'error',
      });
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginBottom: '10vh' }}>
      <Typography
        variant="h4"
        marginBottom="1rem"
        textAlign="center"
        alignSelf="center"
      >
        {t('lifestyle_assessment')}
      </Typography>
      <Box padding={2} border={1} borderRadius={2} borderColor="grey.500">
        {questions.map((question) => (
          <Box
            key={question.id}
            padding={2}
            borderBottom={1}
            borderColor="grey.300"
          >
            <Typography>
              {t(question.key)}
            </Typography>
            <RadioGroup
              row
              value={answers[`question-${question.id}`] || ''}
              onChange={(e) =>
                handleAnswerChange(`question-${question.id}`, e.target.value)
              }
            >
              {question.options.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={t(option)}
                />
              ))}
            </RadioGroup>
            {errors[`question-${question.id}`] && (
              <Typography color="error">{t('required-question')}</Typography>
            )}
          </Box>
        ))}
      </Box>

      <Stack direction="row" justifyContent="center" marginTop={4}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {t('submit')}
        </Button>
      </Stack>
    </Container>
  );
}