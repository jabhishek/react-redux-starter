import { LOGIN_USER } from '../constants';

export const saveUser = (user) => {
	return {
		type: LOGIN_USER,
		payload: user
	};
};