
const initialTrades = [
	{
		securityType: 'EQ',
		exchange: 'NSE',
		code: 'ATULAUTO',
		name: 'Atul Auto',
		quantity: 400,
		trxType: 'buy',
		brokerage: '10',
		date: '2016/01/01'
	}
];

export default function(state = initialTrades, action) {
	if (!action || !action.type) return state;

	switch(action.type) {
		case 'ADD_TRADE': {
			if (!action.payload) {
				return state;
			}
			if (Array.isArray(action.payload)) {
				return [ ...state, ...action.payload ];
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
			return action.payload;
		}
		default:
			return state;
	}
}