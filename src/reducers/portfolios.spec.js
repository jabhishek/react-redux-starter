import portfolioReducer from './portfolios';
import {ADD_PORTFOLIO, SET_PORTFOLIOS} from '../constants';

describe('portfolios reducer', () => {
	it('should return default state if no action passed', () => {
		expect(portfolioReducer([])).toEqual([]);
	})
	it('should return default state if action has no type passed', () => {
		expect(portfolioReducer([], {})).toEqual([]);
	})

	describe('Add portfolio', () => {
		it('should add portfolio', () => {
			expect(portfolioReducer([], { type: ADD_PORTFOLIO, payload: 'TEST' })).toEqual(['TEST']);
			expect(portfolioReducer(['TEST'], { type: ADD_PORTFOLIO, payload: 'TEST1' })).toEqual(['TEST', 'TEST1']);
		})
	})
	describe('Set portfolios', () => {
		it('should set portfolios', () => {
			const initialPortfolios = ['TEST'];
			const portfolios = ['A', 'B'];
			const action = { type: SET_PORTFOLIOS, payload: {
				portfolios: portfolios
			} };
			expect(portfolioReducer([], action)).toEqual(portfolios);
			expect(portfolioReducer(initialPortfolios, action)).toEqual(portfolios);
			expect(portfolioReducer(initialPortfolios, { type: SET_PORTFOLIOS, payload: null})).toEqual(initialPortfolios);
			expect(portfolioReducer(initialPortfolios, { type: SET_PORTFOLIOS, payload: { portfolios: null }})).toEqual(initialPortfolios);
		})
	})
})