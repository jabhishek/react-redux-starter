import portfolioReducer, {initialPortfolios} from './portfolios';
import {ADD_PORTFOLIO, SET_PORTFOLIOS} from '../constants';


describe('portfolios reducer', () => {
	it('should return default state if no state passed', () => {
		expect(portfolioReducer()).toEqual(initialPortfolios);
	})
	it('should return default state if no action passed', () => {
		expect(portfolioReducer([])).toEqual([]);
	})
	it('should return default state if action has no type passed', () => {
		expect(portfolioReducer([], {})).toEqual([]);
	})

	describe('Add portfolio', () => {
		it('should add portfolio', () => {
			const portfolioAdded = { _id: 2, portfolio: 'TEST2'};
			expect(portfolioReducer([], { type: ADD_PORTFOLIO, payload: portfolioAdded })).toEqual([portfolioAdded]);
			expect(portfolioReducer(initialPortfolios, { type: ADD_PORTFOLIO, payload: portfolioAdded }))
				.toEqual([...initialPortfolios, portfolioAdded]);
		})
	})
	describe('Set portfolios', () => {
		it('should set portfolios', () => {
			const portfolios = [{ _id: 3, portfolio: 'TEST3'}, { _id: 4, portfolio: 'TEST4'}];
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