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
  new_section: string | boolean;
  new_group: string | boolean;
  key: string;
  options: string[];
}

export default function AFEQTForm() {
  const { t } = useLanguage();
  const questions: Question[] = [
    {
      id: 1,
      new_section: t('AFEQT-part-1-section-header'),
      new_group: false,
      key: t('AFEQT-part-1'),
      options: [
        t('AFEQT-part-1-question-1-answer-1'),
        t('AFEQT-part-1-question-1-answer-2'),
      ],
    },
    {
      id: 2,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-1-question-2'),
      options: [
        t('AFEQT-part-1-question-2-answer-1'),
        t('AFEQT-part-1-question-2-answer-2'),
        t('AFEQT-part-1-question-2-answer-3'),
        t('AFEQT-part-1-question-2-answer-4'),
        t('AFEQT-part-1-question-2-answer-5'),
        t('AFEQT-part-1-question-2-answer-6'),
      ],
    },
    {
      id: 3,
      new_section: t('AFEQT-part-2-section-header'),
      new_group: t('AFEQT-part-2-header'),
      key: t('AFEQT-part-2'),
      options: [
        t('AFEQT-part-2-answer-1'),
        t('AFEQT-part-2-answer-2'),
        t('AFEQT-part-2-answer-3'),
        t('AFEQT-part-2-answer-4'),
        t('AFEQT-part-2-answer-5'),
        t('AFEQT-part-2-answer-6'),
        t('AFEQT-part-2-answer-7'),
      ],
    },
    {
      id: 4,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-2-question-2'),
      options: [
        t('AFEQT-part-2-answer-1'),
        t('AFEQT-part-2-answer-2'),
        t('AFEQT-part-2-answer-3'),
        t('AFEQT-part-2-answer-4'),
        t('AFEQT-part-2-answer-5'),
        t('AFEQT-part-2-answer-6'),
        t('AFEQT-part-2-answer-7'),
      ],
    },
    {
      id: 5,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-2-question-3'),
      options: [
        t('AFEQT-part-2-answer-1'),
        t('AFEQT-part-2-answer-2'),
        t('AFEQT-part-2-answer-3'),
        t('AFEQT-part-2-answer-4'),
        t('AFEQT-part-2-answer-5'),
        t('AFEQT-part-2-answer-6'),
        t('AFEQT-part-2-answer-7'),
      ],
    },
    {
      id: 6,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-2-question-4'),
      options: [
        t('AFEQT-part-2-answer-1'),
        t('AFEQT-part-2-answer-2'),
        t('AFEQT-part-2-answer-3'),
        t('AFEQT-part-2-answer-4'),
        t('AFEQT-part-2-answer-5'),
        t('AFEQT-part-2-answer-6'),
        t('AFEQT-part-2-answer-7'),
      ],
    },
    {
      id: 7,
      new_section: false,
      new_group: t('AFEQT-part-3-header'),
      key: t('AFEQT-part-3'),
      options: [
        t('AFEQT-part-3-answer-1'),
        t('AFEQT-part-3-answer-2'),
        t('AFEQT-part-3-answer-3'),
        t('AFEQT-part-3-answer-4'),
        t('AFEQT-part-3-answer-5'),
        t('AFEQT-part-3-answer-6'),
        t('AFEQT-part-3-answer-7'),
      ],
    },
    {
      id: 8,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-3-question-2'),
      options: [
        t('AFEQT-part-3-answer-1'),
        t('AFEQT-part-3-answer-2'),
        t('AFEQT-part-3-answer-3'),
        t('AFEQT-part-3-answer-4'),
        t('AFEQT-part-3-answer-5'),
        t('AFEQT-part-3-answer-6'),
        t('AFEQT-part-3-answer-7'),
      ],
    },
    {
      id: 9,
      new_section: false,
      new_group: t('AFEQT-part-4-header'),
      key: t('AFEQT-part-4'),
      options: [
        t('AFEQT-part-4-answer-1'),
        t('AFEQT-part-4-answer-2'),
        t('AFEQT-part-4-answer-3'),
        t('AFEQT-part-4-answer-4'),
        t('AFEQT-part-4-answer-5'),
        t('AFEQT-part-4-answer-6'),
        t('AFEQT-part-4-answer-7'),
      ],
    },
    {
      id: 10,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-4-question-2'),
      options: [
        t('AFEQT-part-4-answer-1'),
        t('AFEQT-part-4-answer-2'),
        t('AFEQT-part-4-answer-3'),
        t('AFEQT-part-4-answer-4'),
        t('AFEQT-part-4-answer-5'),
        t('AFEQT-part-4-answer-6'),
        t('AFEQT-part-4-answer-7'),
      ],
    },
    {
      id: 11,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-4-question-3'),
      options: [
        t('AFEQT-part-4-answer-1'),
        t('AFEQT-part-4-answer-2'),
        t('AFEQT-part-4-answer-3'),
        t('AFEQT-part-4-answer-4'),
        t('AFEQT-part-4-answer-5'),
        t('AFEQT-part-4-answer-6'),
        t('AFEQT-part-4-answer-7'),
      ],
    },
    {
      id: 12,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-4-question-4'),
      options: [
        t('AFEQT-part-4-answer-1'),
        t('AFEQT-part-4-answer-2'),
        t('AFEQT-part-4-answer-3'),
        t('AFEQT-part-4-answer-4'),
        t('AFEQT-part-4-answer-5'),
        t('AFEQT-part-4-answer-6'),
        t('AFEQT-part-4-answer-7'),
      ],
    },
    {
      id: 13,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-4-question-5'),
      options: [
        t('AFEQT-part-4-answer-1'),
        t('AFEQT-part-4-answer-2'),
        t('AFEQT-part-4-answer-3'),
        t('AFEQT-part-4-answer-4'),
        t('AFEQT-part-4-answer-5'),
        t('AFEQT-part-4-answer-6'),
        t('AFEQT-part-4-answer-7'),
      ],
    },
    {
      id: 14,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-4-question-6'),
      options: [
        t('AFEQT-part-4-answer-1'),
        t('AFEQT-part-4-answer-2'),
        t('AFEQT-part-4-answer-3'),
        t('AFEQT-part-4-answer-4'),
        t('AFEQT-part-4-answer-5'),
        t('AFEQT-part-4-answer-6'),
        t('AFEQT-part-4-answer-7'),
      ],
    },
    {
      id: 15,
      new_section: false,
      new_group: t('AFEQT-part-5-header'),
      key: t('AFEQT-part-5'),
      options: [
        t('AFEQT-part-5-answer-1'),
        t('AFEQT-part-5-answer-2'),
        t('AFEQT-part-5-answer-3'),
        t('AFEQT-part-5-answer-4'),
        t('AFEQT-part-5-answer-5'),
        t('AFEQT-part-5-answer-6'),
        t('AFEQT-part-5-answer-7'),
      ],
    },
    {
      id: 16,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-5-question-2'),
      options: [
        t('AFEQT-part-5-answer-1'),
        t('AFEQT-part-5-answer-2'),
        t('AFEQT-part-5-answer-3'),
        t('AFEQT-part-5-answer-4'),
        t('AFEQT-part-5-answer-5'),
        t('AFEQT-part-5-answer-6'),
        t('AFEQT-part-5-answer-7'),
      ],
    },
    {
      id: 17,
      new_section: false,
      new_group: t('AFEQT-part-6-header'),
      key: t('AFEQT-part-6'),
      options: [
        t('AFEQT-part-6-answer-1'),
        t('AFEQT-part-6-answer-2'),
        t('AFEQT-part-6-answer-3'),
        t('AFEQT-part-6-answer-4'),
        t('AFEQT-part-6-answer-5'),
        t('AFEQT-part-6-answer-6'),
        t('AFEQT-part-6-answer-7'),
      ],
    },
    {
      id: 18,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-6-question-2'),
      options: [
        t('AFEQT-part-6-answer-1'),
        t('AFEQT-part-6-answer-2'),
        t('AFEQT-part-6-answer-3'),
        t('AFEQT-part-6-answer-4'),
        t('AFEQT-part-6-answer-5'),
        t('AFEQT-part-6-answer-6'),
        t('AFEQT-part-6-answer-7'),
      ],
    },
    {
      id: 19,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-6-question-3'),
      options: [
        t('AFEQT-part-6-answer-1'),
        t('AFEQT-part-6-answer-2'),
        t('AFEQT-part-6-answer-3'),
        t('AFEQT-part-6-answer-4'),
        t('AFEQT-part-6-answer-5'),
        t('AFEQT-part-6-answer-6'),
        t('AFEQT-part-6-answer-7'),
      ],
    },
    {
      id: 20,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-6-question-3'),
      options: [
        t('AFEQT-part-6-answer-1'),
        t('AFEQT-part-6-answer-2'),
        t('AFEQT-part-6-answer-3'),
        t('AFEQT-part-6-answer-4'),
        t('AFEQT-part-6-answer-5'),
        t('AFEQT-part-6-answer-6'),
        t('AFEQT-part-6-answer-7'),
      ],
    },
    {
      id: 21,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-6-question-4'),
      options: [
        t('AFEQT-part-6-answer-1'),
        t('AFEQT-part-6-answer-2'),
        t('AFEQT-part-6-answer-3'),
        t('AFEQT-part-6-answer-4'),
        t('AFEQT-part-6-answer-5'),
        t('AFEQT-part-6-answer-6'),
        t('AFEQT-part-6-answer-7'),
      ],
    },
    {
      id: 22,
      new_section: false,
      new_group: t('AFEQT-part-7-header'),
      key: t('AFEQT-part-7-question-1'),
      options: [
        t('AFEQT-part-7-answer-1'),
        t('AFEQT-part-7-answer-2'),
        t('AFEQT-part-7-answer-3'),
        t('AFEQT-part-7-answer-4'),
        t('AFEQT-part-7-answer-5'),
        t('AFEQT-part-7-answer-6'),
        t('AFEQT-part-7-answer-7'),
      ],
    },
    {
      id: 23,
      new_section: false,
      new_group: false,
      key: t('AFEQT-part-7-question-2'),
      options: [
        t('AFEQT-part-7-answer-1'),
        t('AFEQT-part-7-answer-2'),
        t('AFEQT-part-7-answer-3'),
        t('AFEQT-part-7-answer-4'),
        t('AFEQT-part-7-answer-5'),
        t('AFEQT-part-7-answer-6'),
        t('AFEQT-part-7-answer-7'),
      ],
    },
  ];

  const navigate = useNavigate();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const { user } = useAuth();
  const { sprint } = useSprintContext();
  const addMeasurement = (type: string, obj: any) => {
    console.log('Submitting', type, obj);
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
        addMeasurement('AFEQT', {
          value: JSON.stringify(answers),
          userID: user?.id ?? 0,
          sprintID: sprint?.id ?? null,
          timeStamp: null,
        });
        enqueueSnackbar('afeqt-form-submitted', { variant: 'success' });
        navigate('/');
      } else {
        enqueueSnackbar('could-not-submit-afeqt-form', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('missed-questions-error', { variant: 'error' });
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginBottom: '10vh' }}>
      <Typography variant="h4" marginBottom="1rem" textAlign="center">
        {t('afeqt_assessment')}
      </Typography>
      <Box padding={2} border={1} borderRadius={2} borderColor="grey.500">
        {questions.map((question) => (
          <Box
            key={question.id}
            padding={2}
            borderBottom={1}
            borderColor="grey.300"
          >
            {question.new_section && (
              <Typography
                variant="h5"
                bgcolor="#b0d8eb"
                padding="2vh"
                marginBottom="2vh"
              >
                {question.new_section}
              </Typography>
            )}
            {question.new_group && (
              <Typography
                variant="h6"
                bgcolor="#ccc"
                padding="2vh"
                marginBottom="2vh"
              >
                {question.new_group}
              </Typography>
            )}
            <Typography>{t(question.key)}</Typography>
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
