import { SET_PORTFOLIOS } from '../constants';

export const fetchPortfoliosSuccess = (portfolios) => {
	return {
		type: SET_PORTFOLIOS,
		payload: {
			portfolios: portfolios
		}
	};
};

export const getPortfolios = () => {
	return dispatch => {
		return fetch('/api/portfolios')
			.then(res => res.json())
			.then(json => {
				dispatch(fetchPortfoliosSuccess(json.portfolios));
			})
			.catch(() => {});
	};
};
