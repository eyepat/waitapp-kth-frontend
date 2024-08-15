import { postUser } from '../src/api/user';
import { addMesurement } from '../src/api/metrics';
import { login } from '../src/api/login';
import { createNewSprint } from '../src/api/sprint';

import { UserWithToken, User, Dummy, Sprint, SprintW } from './data/dummy';
import { generateAndSave } from './gen-dummy';

import { readFile } from 'fs/promises';
import path from 'path';

const updateUserID = (userID: number, userToUpdate: Dummy) => {
  userToUpdate.bp.userID = userID;
  userToUpdate.ws.userID = userID;
  userToUpdate.weight.userID = userID;
  userToUpdate.height.userID = userID;
  userToUpdate.sprints.forEach((sprintw) => {
    sprintw.sprint.userID = userID;
    sprintw.measurements.forEach((metricw) => {
      metricw.userID = userID;
    });
  });
  return userToUpdate;
};

const updateSprintID = (sprintID: number, sprintToUpdate: SprintW) => {
  sprintToUpdate.measurements.forEach((metricw) => {
    metricw.sprintID = sprintID;
  });
  return sprintToUpdate;
};

const addDummy = async (dummy: Dummy) => {
  await postUser(dummy.user).then((result: User, reject?: any) => {
    if (reject) {
      console.log('postUser was rejecteted!');
    }
    if (result.id === undefined) {
      console.log('user already exist!');
    }

    if (dummy.user.password) {
      login({
        email: dummy.user.email,
        password: dummy.user.password,
      }).then((userWithToken: UserWithToken) => {
        if (
          userWithToken.token === undefined ||
          userWithToken.id === undefined
        ) {
          throw new Error('no token or id recieved!');
        }
        const updateduser = updateUserID(userWithToken.id, dummy);
        addMesurement(
          'blood-pressure',
          userWithToken.token,
          updateduser.bp
        ).then(() => {
          addMesurement(
            'waist-size',
            userWithToken.token ? userWithToken.token : '',
            updateduser.ws
          ).then(() => {
            addMesurement(
              'weight',
              userWithToken.token ? userWithToken.token : '',
              updateduser.weight
            ).then(() => {
              addMesurement(
                'height',
                userWithToken.token ? userWithToken.token : '',
                updateduser.height
              ).then(() => {
                console.log('Added all initial metrics to the user');
              });
            });
          });
        });
      });
    }
  });
};
const addSprints = (dummy: Dummy) => {
  if (dummy.user.password === undefined) {
    throw new Error('no password provided!');
  }
  if (dummy.sprints.length === 0) {
    throw new Error('no sprints present on dummy-user');
  }
  login({
    email: dummy.user.email,
    password: dummy.user.password,
  }).then((userWithToken: UserWithToken) => {
    dummy.sprints.forEach((sprintw) => {
      console.log(sprintw.sprint);
      createNewSprint(
        sprintw.sprint,
        userWithToken.token ? userWithToken.token : ''
      ).then((result: Sprint) => {
        if (result.id === undefined) {
          throw new Error('No id recieved from sprint creation!');
        }
        sprintw.measurements.forEach((metric) => {
          const { type, ...metricbody } = metric;
          metricbody.userID = userWithToken.id ? userWithToken.id : -1;
          metricbody.sprintID = result.id ? result.id : -1;
          addMesurement(
            type,
            userWithToken.token ? userWithToken.token : '',
            metricbody
          ).then(() => {
            console.log('Added measurement: ' + type);
          });
        });
      });
    });
  });
};

const loadData = async (): Promise<Dummy[]> => {
  const filePath = path.join(
    process.cwd(),
    'scripts',
    'data',
    'dummyData.json'
  );

  try {
    const fileContent = await readFile(filePath, 'utf-8');
    const data: Dummy[] = JSON.parse(fileContent);
    console.log('Data loaded from file.');
    return data;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File does not exist. Generating and saving data...');
      await generateAndSave();

      const fileContent = await readFile(filePath, 'utf-8');
      const data: Dummy[] = JSON.parse(fileContent);
      console.log('Data loaded from newly generated file.');
      return data;
    } else {
      console.error('Failed to read data:', error);
      throw error;
    }
  }
};

loadData()
  .then((data) => {
    console.log('Loaded data');
    data.forEach((dummy) => {
      addDummy(dummy).then(() => {
        addSprints(dummy);
        console.log('Added: ' + dummy.user.fullName);
      });
    });
  })
  .catch((error) => {
    console.error('Error loading data:', error);
  });
