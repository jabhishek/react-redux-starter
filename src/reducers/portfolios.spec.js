import portfolioReducer from './portfolios';

describe('portfolio', () => {
	it('should return default state if no action passed', () => {
		expect(portfolioReducer([])).toEqual([]);
	})
	it('should return default state if action has no type passed', () => {
		expect(portfolioReducer([], {})).toEqual([]);
	})

	describe('Add portfolio', () => {
		it('should add portfolio', () => {
			expect(portfolioReducer([], { type: 'ADD_PORTFOLIO', payload: 'TEST' })).toEqual(['TEST']);
			expect(portfolioReducer(['TEST'], { type: 'ADD_PORTFOLIO', payload: 'TEST1' })).toEqual(['TEST', 'TEST1']);
		})
	})
})