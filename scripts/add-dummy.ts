import { postUser } from '../src/api/user';
import { addMesurement } from '../src/api/metrics';
import { login } from '../src/api/login';

interface Metric {
  userID: number;
  sprintID: number | null;
  timeStamp: string;
  value: any;
}
interface BloodPressure extends Metric {
  value: string;
}
interface WaistSize extends Metric {
  value: number;
}
interface Weight extends Metric {
  value: number;
}
interface Height extends Metric {
  value: number;
}

interface User {
  id?: number;
  email: string;
  password?: string;
  fullName?: string;
  birthDate?: string;
  gender?: string;
  ablationDate?: string;
}

interface UserWithToken extends User {
  token?: string;
  authLevel?: number;
}

interface Dummy {
  user: User;
  bp: BloodPressure;
  ws: WaistSize;
  weight: Weight;
  height: Height;
}

const startDate = '2023-08-15T11:26:47.950207';

var peter: Dummy = {
  user: {
    fullName: 'Peter Exempel',
    password: 'petertest',
    email: 'peter@exempel.se',
    birthDate: '1951-12-01',
    gender: 'MALE',
  },
  bp: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: '145/95',
  },
  ws: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 102,
  },
  weight: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 122,
  },
  height: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 188,
  },
};

const updateUserID = (userID: number, userToUpdate: Dummy) => {
  userToUpdate.bp.userID = userID;
  userToUpdate.ws.userID = userID;
  userToUpdate.weight.userID = userID;
  userToUpdate.height.userID = userID;
  return userToUpdate;
};

await postUser(peter.user).then((result: User) => {
  if (result.id === undefined) {
    console.log('user already exist!');
  }

  if (peter.user.password) {
    login({
      email: peter.user.email,
      password: peter.user.password,
    }).then((userWithToken: UserWithToken) => {
      if (userWithToken.token === undefined || userWithToken.id === undefined) {
        console.error('no token or id recieved!');
        return -1;
      }
      const updateduser = updateUserID(userWithToken.id, peter);
      console.log(JSON.stringify(updateduser));
      addMesurement('blood-pressure', userWithToken.token, updateduser.bp).then(
        () => {
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
        }
      );
    });
  }
});
