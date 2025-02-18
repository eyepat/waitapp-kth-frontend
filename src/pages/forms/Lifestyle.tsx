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
  score: number;
  key: string;
}

export default function LifestyleForm() {
    const tobaccoQuestions: Question[] = [
        {id: 1, score: 1, key: 'tobacco_question1'},
        {id: 2, score: 1, key: 'tobacco_question2'}
    ];

    const alcoholQuestions: Question[] = [
        {id: 1, score: 1, key: 'alcohol_question1'},
        {id: 2, score: 1, key: 'alcohol_question2'}
    ];

    const exerciseQuestions: Question[] = [
        {id: 1, score: 1, key: 'exercise_question1'},
        {id: 2, score: 1, key: 'exercise_question2'}
    ];

    const foodQuestions: Question[] = [
        {id: 1, score: 1, key: 'food_question1'},
        {id: 2, score: 1, key: 'food_question2'},
        {id: 3, score: 1, key: 'food_question3'},
        {id: 4, score: 1, key: 'food_question4'},
        {id: 5, score: 1, key: 'food_question5'}
    ];
}

