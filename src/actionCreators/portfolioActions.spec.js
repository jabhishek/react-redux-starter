/* The tests are not working in karma .. needs investigating

import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import * as actions from './portfolioActions';
import { ADD_PORTFOLIO, SET_PORTFOLIOS } from '../constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

console.log('mockStore', mockStore);

describe('async actions', () => {
	beforeEach(() => {
		nock.disableNetConnect();
	});

	afterEach(() => {
		nock.cleanAll();
		nock.enableNetConnect();
	})

	it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', (done) => {
		nock('/')
			.get('/api/portfolios/')
			.reply(200, { portfolios: [{ _id: 1, portfolio: 'TEST'}]});

		const expectedActions = [
			{ type: SET_PORTFOLIOS, portfolios: [{ _id: 1, portfolio: 'TEST'}]}
		]
		const store = mockStore({ portfolios: [] })

		return store.dispatch(actions.getPortfolios())
			.then((...args) => { // return of async actions
				done();
				console.log(store.getActions(), ...args);

				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})*/
