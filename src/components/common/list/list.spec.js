import React from 'react';
import { shallow } from 'enzyme';
import List from './list';

describe('List', () => {
	it('should have the class list', () => {
		const wrapper = shallow(<List />);
		expect(wrapper.find('.list').length).toEqual(1);
	})
	it('should add passed class to class list', () => {
		const wrapper = shallow(<List className="my-class"/>);
		expect(wrapper.find('.list').length).toEqual(1);
		expect(wrapper.find('.my-class').length).toEqual(1);
	})
	it('should render children passed', () => {
		const wrapper = shallow(<List>
			<li>Hey</li>
		</List>);
		expect(wrapper.contains(<li>Hey</li>)).toEqual(true);
	})
});