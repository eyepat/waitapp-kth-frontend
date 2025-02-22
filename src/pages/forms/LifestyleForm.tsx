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
  const { t } = useLanguage();
  const questions: Question[] = [
    {
        id: 1,
        key: t('tobacco-question-1'),
        options: [
            t('tobocco-question-1-answer1'),
            t('tobocco-question-1-answer2'),
            t('tobocco-question-1-answer3'),
            t('tobocco-question-1-answer4'),
            t('tobocco-question-1-answer5'),
            t('tobocco-question-1-answer6'),
            t('tobocco-question-1-answer7')
        ]
    },
    {
        id: 2,
        key: t('tobacco-question-2'),
        options: [
            t('tobocco-question-2-answer1'),
            t('tobocco-question-2-answer2'),
            t('tobocco-question-2-answer3'),
            t('tobocco-question-2-answer4'),
            t('tobocco-question-2-answer5'),
            t('tobocco-question-2-answer6'),
            t('tobocco-question-2-answer7')
        ]
    },
    {
        id: 3,
        key: t('exercise-question-1'),
        options: [
            t('exercise-question-1-answer-1'),
            t('exercise-question-1-answer-2'),
            t('exercise-question-1-answer-3'),
            t('exercise-question-1-answer-4'),
            t('exercise-question-1-answer-5'),
            t('exercise-question-1-answer-6')
        ]
    },
    {
        id: 4,
        key: t('exercise-question-2'),
        options: [
            t('exercise-question-2-answer-1'),
            t('exercise-question-2-answer-2'),
            t('exercise-question-2-answer-3'),
            t('exercise-question-2-answer-4'),
            t('exercise-question-2-answer-5'),
            t('exercise-question-2-answer-6')
        ]
    },
    {
        id: 5,
        key: t('food-question-1'),
        options: [
            t('food-question-1-2-answer-1'),
            t('food-question-1-2-answer-2'),
            t('food-question-1-2-answer-3'),
            t('food-question-1-2-answer-4')
        ]
    },
    {
        id: 6,
        key: t('food-question-2'),
        options: [
            t('food-question-1-2-answer-1'),
            t('food-question-1-2-answer-2'),
            t('food-question-1-2-answer-3'),
            t('food-question-1-2-answer-4')
        ]
    },
    {
        id: 7,
        key: t('food-question-3'),
        options: [
            t('food-question-3-answer-1'),
            t('food-question-3-answer-2'),
            t('food-question-3-answer-3'),
            t('food-question-3-answer-4')
        ]
    },
    {
        id: 8,
        key: t('food-question-4'),
        options: [
            t('food-question-4-answer-1'),
            t('food-question-4-answer-2'),
            t('food-question-4-answer-3'),
            t('food-question-4-answer-4')
        ]
    },
    {
        id: 9,
        key: t('food-question-5'),
        options: [
            t('food-question-5-answer-1'),
            t('food-question-5-answer-2'),
            t('food-question-5-answer-3'),
            t('food-question-5-answer-4')
        ]
    }
];


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