export default function (state=[], action) {
	if (!action || !action.type) return state;

	switch(action.type) {
		case 'ADD_TRADE': {
			if (!action.payload) {
				return state;
			}
			return [ ...state, action.payload ];
		}
		case 'SET_TRADES': {
			if (!action.payload) {
				return state;
			}
			if (!Array.isArray(action.payload)) {
				return [ action.payload ];
			}
			return action.payload ;
		}
		default:
			return state;
	}
}