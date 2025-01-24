import { TrainingActivity } from '../types';

// Define templates for reusable activities
const templates = {
  walkingCyclingSwimming: {
    title: 'walking-cycling-swimming-30min-workout',
    description: 'walking-cycling-swimming-30min-workout-desc',
    videoUrl: '',
  },
  resting: {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  exercisesV1To4: [
    {
      title: 'exercise-1',
      description: 'simple-three-workouts-desc',
      videoUrl: 'https://www.youtube.com/embed/-1qQjeHZEfY',
    },
    {
      title: 'exercise-2',
      description: 'simple-three-workouts-desc',
      videoUrl: 'https://www.youtube.com/embed/qW3Zr1VAJYE',
    },
    {
      title: 'exercise-3',
      description: 'simple-three-workouts-desc',
      videoUrl: 'https://www.youtube.com/embed/179xw7lGbPc',
    },
  ],
  exercisesV5To8: [
    {
      title: 'exercise-1',
      description: 'simple-three-workouts-desc',
      videoUrl: 'https://www.youtube.com/embed/XqBtWqmitk8',
    },
    {
      title: 'exercise-2',
      description: 'simple-three-workouts-desc',
      videoUrl: 'https://www.youtube.com/embed/Ypxw7Jcit1c',
    },
    {
      title: 'exercise-3',
      description: 'simple-three-workouts-desc',
      videoUrl: 'https://www.youtube.com/embed/USyW4xv3BIQ',
    },
    {
      title: 'exercise-4',
      description: 'simple-three-workouts-desc',
      videoUrl: 'https://www.youtube.com/embed/179xw7lGbPc',
    },
  ],
};

// Utility function to generate the object
const generateTrainingActivities = () => {
  const activities: { [key: string]: TrainingActivity[] } = {};

  for (let week = 1; week <= 8; week++) {
    for (let day = 1; day <= 7; day++) {
      for (let rapa = 1; rapa <= 4; rapa++) {
        const key = `${day}-${rapa}-${week}`;

        if (week < 5) {
          if (day === 1 || day === 4 || day === 7) {
            activities[key] = [templates.walkingCyclingSwimming];
          } else if (day === 2 || day === 5) {
            activities[key] = [templates.resting];
          } else if (day === 3 || day === 6) {
            activities[key] = [...templates.exercisesV1To4];
          }
        } else if (week >= 5 && week <= 8) {
          if (day === 1 || day === 4) {
            activities[key] = [templates.walkingCyclingSwimming];
          } else if (day === 2 || day === 5 || day === 7) {
            activities[key] = [templates.resting];
          } else if (day === 3 || day === 6) {
            activities[key] = [...templates.exercisesV5To8];
          }
        }
      }
    }
  }

  return activities;
};

// Export the precomputed activities object
export const trainingActivities = generateTrainingActivities();
