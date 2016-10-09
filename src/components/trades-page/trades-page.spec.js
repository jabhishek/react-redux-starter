import TradesPage from './trades-page';
import React from 'react';
import { shallow } from 'enzyme';

describe('Trades Page', () => {
	describe('structure', () => {
		let wrapper;
		beforeEach(() => {
			wrapper = shallow(<TradesPage trades={[]}/>);
		})
		it('should have container class', () => {
			expect(wrapper.find('.container').length).toBe(1);
		})
		it('should have TradesForm class', () => {
			expect(wrapper.find('TradesForm').length).toBe(1);
		})
	})
});