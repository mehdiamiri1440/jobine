import {
    requester
} from '../utils';

export const sendVerificationCode = (phoneNumber, password, role) => {
    return new Promise((resolve, reject) => {
        requester
            .fetchAPI({
                route: `auth/registration`,
                method: 'POST',
                data: { phoneNumber, password, role },
                withAuth: true
            })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err.response.data.message);
            });
    });
};

export const validateVerificationCode = (phoneNumber, code) => {
    return new Promise((resolve, reject) => {
        requester
            .fetchAPI({
                route: `auth/registration/verify`,
                method: 'POST',
                data: { phoneNumber, code },
                withAuth: true
            })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            });
    });
};