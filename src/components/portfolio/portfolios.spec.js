import React from 'react';
import { shallow } from 'enzyme';
import PortfolioPageInj from 'inject!./portfolios';

class AddPortfolio extends React.Component {
	render() {
		return (
			<div>Test</div>
		)
	}
}

const PortfolioPage = PortfolioPageInj({
	'./add-portfolio/add-portfolio-connect': AddPortfolio
}).default;

describe('Portfolios', () => {
	let wrapper, callParams;
	let callCount;
	function setup(portfolios) {
		callCount = 0;
		callParams = null;
		const props = {
			portfolios: portfolios,
			portfolioActions: {
				getPortfolios: (...args) => {
					callCount++;
					callParams = args;
					return Promise.resolve();
				}
			}
		};
		wrapper = shallow(<PortfolioPage {...props}/>);

		return {
			wrapper,
			props
		}
	}

	beforeEach(() => {
		setup([]);
	});

	it('should exist', () => {
		expect(wrapper.find('.container').length).toEqual(1);
	})
	it('should have AddPortfolio component', () => {
		expect(wrapper.find('AddPortfolio').length).toEqual(1);
	})
	it('should have a separator', () => {
		expect(wrapper.find('.separator').length).toEqual(1);
	})
	describe('SubHeader', () => {
		it('should have SubHeader component', () => {
			expect(wrapper.find('SubHeader').length).toEqual(1);
		})
		it('should have headerText property', () => {
			const props = wrapper.find('SubHeader').props();
			expect(props.headerText).toEqual('All Portfolios');
		})
	})
	describe('PortfolioList', () => {
		it('should be present', () => {
			const { wrapper } = setup();
			expect(wrapper.find('PortfolioList').length).toEqual(1);
		})
		it('should have portfolios property set as ', () => {
			const { wrapper } = setup(['XYZ']);
			const props = wrapper.find('PortfolioList').props();
			expect(props.portfolios).toEqual(['XYZ']);
		})
	})

});