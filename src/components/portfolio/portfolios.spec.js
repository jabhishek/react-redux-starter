import React from 'react';
import { shallow } from 'enzyme';
import PortfolioPage from './portfolios';

describe('Portfolios', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<PortfolioPage portfolios={[]} portfolioActions={{ getPortfolios: () => { }}}/>);
	});

	it('should exist', () => {
		expect(wrapper.find('.container')).toBeDefined();
	})
});