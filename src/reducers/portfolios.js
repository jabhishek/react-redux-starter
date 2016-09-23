import {ADD_PORTFOLIO} from '../constants';
export default function(state = ['ABHI', 'KAMLA'], action) {
	if (!action || !action.type) return state;

	switch(action.type) {
		case ADD_PORTFOLIO: {
			if (!action.payload) {
				return state;
			}
			if (Array.isArray(action.payload)) {
				return [ ...state, ...action.payload ];
			}
			return [ ...state, action.payload ];
		}
		default:
			return state;
	}
}