import {
  requester
} from '../utils';

export const changePassword = () => {
  return new Promise((resolve, reject) => {
    requester
      .fetchAPI({
        route: ``,
        method: '',
        withAuth: true
      })
      .then(result => {
      })
      .catch(err => {
        reject(err);
      });
  });
};