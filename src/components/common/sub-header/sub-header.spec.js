import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from './sub-header';

describe('SubHeader', () => {
	it('should have the class sub-header', () => {
		const wrapper = shallow(<SubHeader />);
		expect(wrapper.find('.sub-header').length).toEqual(1);
	})
	it('should render the text passed as headerText', () => {
		const wrapper = shallow(<SubHeader headerText="text"/>);
		expect(wrapper.find('.sub-header').text()).toEqual('text');
	})
	it('should add passed class to class list', () => {
		const wrapper = shallow(<SubHeader headerText="text" className="my-class"/>);
		expect(wrapper.find('.sub-header').length).toEqual(1);
		expect(wrapper.find('.my-class').length).toEqual(1);
	})
});