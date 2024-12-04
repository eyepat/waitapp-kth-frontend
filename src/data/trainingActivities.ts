import { TrainingActivity } from '../types';

export const trainingActivities: { [key: string]: TrainingActivity[] } = {
  //Format 'day-RAPA-weak'
  // Just a placeholder for test
  '1-1-1': [{
    title: 'walking-cycling-swimming-30min-workout',
    description: 'walking-cycling-swimming-30min-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },],


  '2-1-1': [{
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  }],
  '3-1-1': [{
    title: 'exercise-1',
    description: 'simple-three-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  },
  {
    title: 'exercise-2',
    description: 'simple-three-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  },
  {
    title: 'exercise-3',
    description: 'simple-three-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  },
  {
    title: 'exercise-4',
    description: 'simple-three-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  }],
  '4-1-1': [{
    title: 'strength-workout',
    description: 'strength-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/3ZSTBaKG7no',
  }],
  '5-1-1': [{
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  }],
  '6-1-1': [{
    title: 'simple-three-workouts',
    description: 'simple-three-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  }],
  '7-1-1': [{
    title: 'walking-cycling-swimming-30min-workout',
    description: 'walking-cycling-swimming-30min-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  }],
  /*
  '1-1-2': {
    title: 'walk-into-fast-walking-workout',
    description: 'walk-into-fast-walking-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/vgJDs0PXUpQ',
  },
  '2-1-2': {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  '3-1-2': {
    title: 'simple-four-workouts',
    description: 'simple-four-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  },
  '4-1-2': {
    title: 'walking-cycling-swimming-45min-workout',
    description: 'walking-cycling-swimming-45min-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },
  '5-1-2': {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  '6-1-2': {
    title: 'simple-four-workouts',
    description: 'simple-four-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  },
  '7-1-2': {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  '1-1-3': {
    title: 'walking-cycling-swimming-45min-workout',
    description: 'walking-cycling-swimming-45min-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },
  '2-1-3': {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  '3-1-3': {
    title: 'simple-four-workouts',
    description: 'simple-four-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  },
  '4-1-3': {
    title: 'walking-cycling-swimming-45min-workout',
    description: 'walking-cycling-swimming-45min-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },
  '5-1-3': {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  '6-1-3': {
    title: 'simple-four-workouts',
    description: 'simple-four-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/JlyTM_hhMkw',
  },
  '7-1-3': {
    title: 'walking-cycling-swimming-45min-workout',
    description: 'walking-cycling-swimming-45min-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },
  '1-1-4': {
    title: 'heart-endurance-training',
    description: 'heart-endurance-training-desc',
    videoUrl: 'https://www.youtube.com/embed/665nvRUbBuc',
  },
  '2-1-4': {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  '3-1-4': {
    title: 'intensive-four-workouts',
    description: 'intensive-four-workouts-desc',
    videoUrl: 'https://www.youtube.com/embed/It-geE_3z9I',
  },
  '4-1-4': {
    title: 'strength-workout',
    description: 'strength-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/3ZSTBaKG7no',
  },
  '5-1-4': {
    title: 'walking-cycling-swimming-45min-workout',
    description: 'walking-cycling-swimming-45min-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },
  '6-1-4': {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  '7-1-4': {
    title: 'walking-cycling-swimming-45min-workout',
    description: 'walking-cycling-swimming-45min-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },
  */
};
