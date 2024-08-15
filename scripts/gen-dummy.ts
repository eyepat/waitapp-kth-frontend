import { Dummy, MetricW, SprintW, User } from './data/dummy';
import { writeFile } from 'fs/promises';
import path from 'path';

const startDate = new Date('2023-08-15');
const sprintLen = 7; // in days

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addHours(date: Date, hours: number): Date {
  const result = new Date(date);
  result.setHours(result.getHours() + (hours % 24));
  return result;
}

function subtractWeeks(date: Date, weeks: number): Date {
  const daysToSubtract = weeks * 7; // Convert weeks to days
  const resultDate = new Date(date); // Create a copy of the original date
  resultDate.setDate(resultDate.getDate() - daysToSubtract); // Subtract days
  return resultDate; // Return the new date
}

function formatDate(date: Date): string {
  return date.toISOString();
}

const createMeasurement = (
  userID: number,
  sprintID: number | null,
  date: Date,
  value: string | number,
  type: 'height' | 'weight' | 'blood-pressure' | 'waist-size' | 'rapa' | 'steps'
): MetricW => {
  return {
    userID,
    sprintID,
    timeStamp: formatDate(date),
    value,
    type,
  };
};

const createSprint = (
  userID: number,
  sprintID: number,
  type: string,
  level: string,
  startDate: Date,
  initialBP: string,
  initialWaistSize: number,
  initialWeight: number
): SprintW => {
  const measurements: MetricW[] = [];
  const bp: string[] = initialBP.split('/');
  if (bp.length < 2) {
    console.error('invalid bloodpressure provided!');
    throw new Error('invalid bloodpressure provided!');
  }

  for (let i = 0; i < 7; i++) {
    const bloodPressure: string = `${bp[0].slice(0, bp[0].length - 1) + Math.floor((Math.random() * 10) % 9)}/${bp[1].slice(0, bp[1].length - 1) + Math.floor((Math.random() * 10) % 9)}`;
    const waistSize: number = initialWaistSize - i + Math.random() * 2 - 1;
    const weight: number = initialWeight + i * 0.1 + Math.random() * 0.5 - 0.25;

    const date = addDays(startDate, i);
    measurements.push(
      createMeasurement(
        userID,
        sprintID,
        addHours(date, 2),
        bloodPressure,
        'blood-pressure'
      )
    );
    measurements.push(
      createMeasurement(
        userID,
        sprintID,
        addHours(date, 2),
        waistSize,
        'waist-size'
      )
    );
    measurements.push(
      createMeasurement(userID, sprintID, addHours(date, 2), weight, 'weight')
    );
  }

  return {
    sprint: {
      type,
      level,
      score: Math.floor(Math.random() * 10) + 1, // TODO: check how we want it
      isCompleted: true,
      startDate: formatDate(startDate),
      endDate: formatDate(addDays(startDate, 6)),
      userID,
    },
    measurements,
  };
};

export const generateDummyData = (
  user: User,
  initialBP: string,
  initialWaistSize: number,
  initialWeight: number,
  initialHeight: number,
  numberOfSprints: number
): Dummy => {
  if (user.id === undefined) {
    throw new Error('no userID was provided');
  }
  const sprints: SprintW[] = [];
  let currentStartDate = subtractWeeks(new Date(), numberOfSprints);

  for (let i = 0; i < numberOfSprints; i++) {
    const sprintType = i % 2 === 0 ? 'PHYSICAL' : 'FOOD';
    const levelType =
      sprintType === 'FOOD'
        ? ['NORMAL', 'LOW', 'HIGH'][i % 3]
        : ['NORMAL', 'INTENSE'][i % 2];

    sprints.push(
      createSprint(
        user.id,
        i,
        sprintType,
        levelType,
        currentStartDate,
        initialBP,
        initialWaistSize,
        initialWeight
      )
    );
    currentStartDate = addDays(currentStartDate, sprintLen);
  }

  return {
    user: user,
    bp: createMeasurement(
      user.id,
      null,
      startDate,
      initialBP,
      'blood-pressure'
    ),
    ws: createMeasurement(
      user.id,
      null,
      startDate,
      initialWaistSize,
      'waist-size'
    ),
    weight: createMeasurement(
      user.id,
      null,
      startDate,
      initialWeight,
      'weight'
    ),
    height: createMeasurement(
      user.id,
      null,
      startDate,
      initialHeight,
      'height'
    ),
    sprints,
  };
};

const generateRandomGender = (): 'FEMALE' | 'MALE' => {
  return Math.random() > 0.5 ? 'FEMALE' : 'MALE';
};

const generateRandomPastDate = (start: Date, end: Date): string => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split('T')[0];
};

const generateRandomFutureDate = (start: Date, yearsAhead: number): string => {
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + yearsAhead);

  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split('T')[0];
};

const nameDictionary = {
  MALE: {
    firstNames: [
      'John',
      'Bengt',
      'Göran',
      'Sven',
      'Harry',
      'David',
      'Robert',
      'Thomas',
      'Karl',
      'Lars',
    ],
    lastNames: [
      'Smith',
      'Johnsson',
      'Svensson',
      'Göransson',
      'Pettersson',
      'Ekstedt',
      'Ibrahimovic',
      'Andersson',
      'Johansson',
      'Gustafsson',
    ],
  },
  FEMALE: {
    firstNames: [
      'Alice',
      'Alma',
      'Elsa',
      'Birgit',
      'Elizabeth',
      'Barbro',
      'Susanne',
      'Jessica',
      'Sara',
      'Karin',
    ],
    lastNames: [
      'Smith',
      'Johnsson',
      'Svensson',
      'Göransson',
      'Pettersson',
      'Ekstedt',
      'Ibrahimovic',
      'Andersson',
      'Johansson',
      'Gustafsson',
    ],
  },
};

const getRandomName = (gender: 'MALE' | 'FEMALE') => {
  const firstName =
    nameDictionary[gender].firstNames[
      Math.floor(Math.random() * nameDictionary[gender].firstNames.length)
    ];
  const lastName =
    nameDictionary[gender].lastNames[
      Math.floor(Math.random() * nameDictionary[gender].lastNames.length)
    ];

  return `${firstName} ${lastName}`;
};

const generateUser = (): User => {
  const gender = generateRandomGender();

  const fullName = getRandomName(gender);
  const password = (fullName.split(' ')[0] + 'test').toLowerCase();
  const email = fullName.split(' ')[0].toLowerCase() + '@exempel.se';
  const birthDate = generateRandomPastDate(new Date(1950, 0, 1), new Date());

  const ablationDate: string | undefined =
    Math.random() > 0.5 ? generateRandomFutureDate(new Date(), 10) : undefined;

  return {
    id: 0,
    fullName: fullName,
    password: password,
    email: email,
    birthDate: birthDate,
    gender: gender,
    ablationDate: ablationDate,
  };
};

export const generateDummies = (n: number) => {
  const usedEmails: string[] = [];
  const dummyData: Dummy[] = [];
  for (let i = 0; i < n; i++) {
    const newDummy = generateDummyData(
      generateUser(),
      '125/80',
      94,
      80,
      170,
      (Math.random() * 10) % 4
    );
    if (!usedEmails.includes(newDummy.user.email)) {
      dummyData.push(newDummy);
      usedEmails.push(newDummy.user.email);
    } else {
      console.log('skipping duplicate email');
    }
  }
  return dummyData;
};

export const generateAndSave = async () => {
  const dummyCount = Math.min(Math.max(Math.random() * 20, 2), 20);
  const data = JSON.stringify(generateDummies(dummyCount), null, 2);

  const filePath = path.join('scripts/data', 'dummyData.json');

  try {
    await writeFile(filePath, data, 'utf-8');
    console.log(`Data saved to ${filePath}`);
  } catch (error) {
    console.error('Failed to save data:', error);
  }
};

await generateAndSave();
