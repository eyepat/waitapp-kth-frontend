import { TrainingActivity } from '../types';

// Define templates for reusable activities
const templates = {
  walkingCyclingSwimming: {
    title: 'walking-cycling-swimming-30min-workout',
    description: 'walking-cycling-swimming-30min-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/Mol0lrRBy3g',
  },
  resting: {
    title: 'resting-workout',
    description: 'resting-workout-desc',
    videoUrl: 'https://www.youtube.com/embed/TcDo4kXLDtQ',
  },
  exercises: [
    {
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
  ],
};

// Utility function to generate the object
const generateTrainingActivities = () => {
  const activities: { [key: string]: TrainingActivity[] } = {};

  for (let week = 1; week <= 4; week++) {
    for (let day = 1; day <= 7; day++) {
      for (let rapa = 1; rapa <= 4; rapa++) {
        const key = `${day}-${week}-${rapa}`;

        if (day === 1 || day === 4 || day === 7) {
          activities[key] = [templates.walkingCyclingSwimming];
        } else if (day === 2 || day === 5) {
          activities[key] = [templates.resting];
        } else if (day === 3 || day === 6) {
          activities[key] = [...templates.exercises];
        }
      }
    }
  }

  return activities;
};

// Generate the training activities object
export const trainingActivities = generateTrainingActivities();
