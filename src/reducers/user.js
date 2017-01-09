import { LOGIN_USER } from  '../constants';
export default function(state = null, action) {
	if (!action || !action.type) return state;

	switch(action.type) {
		case LOGIN_USER: {
			if (!action.payload) {
				return state;
			}

			return { ...action.payload };
		}
		default:
			return state;
	}
}