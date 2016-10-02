import {ADD_PORTFOLIO, SET_PORTFOLIOS} from '../constants';

export const initialPortfolios = [ {_id: 1, portfolio: 'ABHI'} ];

export default function(state = initialPortfolios, action) {
	if (!action || !action.type) return state;
	if (!action.payload) {
		return state;
	}
	switch(action.type) {
		case ADD_PORTFOLIO: {
			if (Array.isArray(action.payload)) {
				return [ ...state, ...action.payload ];
			}
			return [ ...state, action.payload ];
		}
		case SET_PORTFOLIOS: {
			const portfolios = action.payload.portfolios;
			if (!portfolios || !Array.isArray(portfolios)) {
				return state;
			}
			return portfolios;
		}
		default:
			return state;
	}
}