import storage from 'store';

export default {
	get: (key = 'token') => {
		return storage.get(key);
	},
	set: (token, key = 'token') => {
		if (token === null || token === undefined) {
			storage.remove(key);
		} else {
			storage.set(key, token);
		}
	}
};
