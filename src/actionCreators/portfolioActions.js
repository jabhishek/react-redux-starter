import { SET_PORTFOLIOS } from '../constants';
import request from 'superagent';

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

		return request
			.get('/api/portfolios/')
			.accept('application/json')
			.end((err, res) => {
				if (err) {
				//	dispatch(loginUserFailure(errorMessages));
				} else {
					const response = JSON.parse(res.text);
					dispatch(fetchPortfoliosSuccess(response.portfolios));
				}
			});

	};
};
