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

interface Question {
  id: number;
  key: string;
}

export default function RapaForm() {
  const rapa1Questions: Question[] = [
    { id: 1, key: 'rapa1_question1' },
    { id: 2, key: 'rapa1_question2' },
    { id: 3, key: 'rapa1_question3' },
    { id: 4, key: 'rapa1_question4' },
    { id: 5, key: 'rapa1_question5' },
    { id: 6, key: 'rapa1_question6' },
    { id: 7, key: 'rapa1_question7' },
  ];

  const rapa2Questions: Question[] = [
    { id: 1, key: 'rapa2_question1' },
    { id: 2, key: 'rapa2_question2' },
  ];

  const { t } = useLanguage();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors: { [key: string]: boolean } = {};

    // Check RAPA 1 questions
    rapa1Questions.forEach((question) => {
      if (!answers[`rapa1-${question.id}`]) {
        formIsValid = false;
        newErrors[`rapa1-${question.id}`] = true;
      }
    });

    // Check RAPA 2 questions
    rapa2Questions.forEach((question) => {
      if (!answers[`rapa2-${question.id}`]) {
        formIsValid = false;
        newErrors[`rapa2-${question.id}`] = true;
      }
    });

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted answers:', answers);
      enqueueSnackbar('good-job-on-new-rapa-score', {
        variant: 'success',
      });
      navigate('/');
      // add to db
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
        {t('rapa') + ' (RAPA)'}
      </Typography>
      <Box padding={2} border={1} borderRadius={2} borderColor="grey.500">
        <Typography variant="h4" textAlign="center" gutterBottom>
          RAPA 1
        </Typography>
        {rapa1Questions.map((question) => (
          <Box
            key={question.id}
            padding={2}
            borderBottom={1}
            borderColor="grey.300"
          >
            <Typography>{t(question.key)}</Typography>
            <RadioGroup
              row
              value={answers[`rapa1-${question.id}`] || ''}
              onChange={(e) =>
                handleAnswerChange(`rapa1-${question.id}`, e.target.value)
              }
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label={t('yes')}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label={t('no')}
              />
            </RadioGroup>
            {errors[`rapa1-${question.id}`] && (
              <Typography color="error">{t('required-question')}</Typography>
            )}
          </Box>
        ))}
      </Box>

      <Box
        padding={2}
        border={1}
        borderRadius={2}
        borderColor="grey.500"
        marginTop={4}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          RAPA 2
        </Typography>
        {rapa2Questions.map((question) => (
          <Box
            key={question.id}
            padding={2}
            borderBottom={1}
            borderColor="grey.300"
          >
            <Typography>{t(question.key)}</Typography>
            <RadioGroup
              row
              value={answers[`rapa2-${question.id}`] || ''}
              onChange={(e) =>
                handleAnswerChange(`rapa2-${question.id}`, e.target.value)
              }
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label={t('yes')}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label={t('no')}
              />
            </RadioGroup>
            {errors[`rapa2-${question.id}`] && (
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
