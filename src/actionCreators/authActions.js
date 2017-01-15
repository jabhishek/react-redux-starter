import { LOGIN_USER, LOGOUT_USER } from '../constants';
import storage from '../utils/localStore';
import request from 'superagent';

export const saveUser = (user) => {
	return {
		type: LOGIN_USER,
		payload: user
	};
};

export const logoutUser = () => {
	storage.set(null);
	return {
		type: LOGOUT_USER,
		payload: null
	};
};

export const getLoggedInUser = () => {
	const token = storage.get();
	return new Promise((resolve, reject) => {
		request
			.get('/api/user/me')
			.accept('application/json')
			.set('Authorization', `Bearer ${token}`)
			.end((err, res) => {
				let errorMessage = 'Unauthorized';
				if (err) {
					if (res && res.text) {
						errorMessage = JSON.parse(res.text);
					}

					reject(errorMessage);
				} else {
					const response = JSON.parse(res.text);
					resolve(response.user);
				}
			});
	});
};
