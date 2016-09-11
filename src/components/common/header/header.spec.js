import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Header />);
	});

	it('contains a header text', () => {
		console.log(wrapper.html());
		expect(wrapper.find('h1').length).toEqual(1);
	})

	it('contains a header text', () => {
		expect(wrapper.find('h1').text()).toEqual('Portfolio Manager');
	})
});