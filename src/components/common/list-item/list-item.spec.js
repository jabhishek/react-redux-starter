import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './list-item';

describe('ListItem', () => {
	it('should have the class list', () => {
		const wrapper = shallow(<ListItem />);
		console.log(wrapper.html());
		expect(wrapper.find('.list-item').length).toEqual(1);
	})
	it('should add passed class to class list', () => {
		const wrapper = shallow(<ListItem className="my-class"/>);
		expect(wrapper.find('.list-item').length).toEqual(1);
		expect(wrapper.find('.my-class').length).toEqual(1);
	})
	it('should render children passed', () => {
		const wrapper = shallow(<ListItem>
			<li>Hey</li>
		</ListItem>);
		expect(wrapper.contains(<li>Hey</li>)).toEqual(true);
	})
});