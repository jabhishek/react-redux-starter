import { SET_PORTFOLIOS, ADD_PORTFOLIO } from '../constants';
import request from 'superagent';

export const fetchPortfoliosSuccess = (portfolios) => {
	return {
		type: SET_PORTFOLIOS,
		payload: {
			portfolios: portfolios
		}
	};
};

export const addPortfolioSuccess = (portfolio) => {
	return {
		type: ADD_PORTFOLIO,
		payload: portfolio
	};
};

export const getPortfolios = () => {
	return dispatch => {

		return new Promise((resolve, reject) => {
			request
				.get('/api/portfolios/')
				.accept('application/json')
				.end((err, res) => {
					if (err) {
						reject(err);
					} else {
						const response = JSON.parse(res.text);
						dispatch(fetchPortfoliosSuccess(response.portfolios));
						resolve(response.portfolios);
					}
				});
		});
	};
};

export const addPortfolio = (portfolio) => {
	return dispatch => {

		return new Promise((resolve, reject) => {
			request
				.post('/api/portfolios/')
				.accept('application/json')
				.send({ portfolio: portfolio })
				.end((err, res) => {
					if (err) {
						//	dispatch(loginUserFailure(errorMessages));
					} else {
						const { _id } = JSON.parse(res.text);
						dispatch(addPortfolioSuccess({_id, portfolio}));
						resolve();
					}
				});
		});
	};
};
