import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from './page-header';

describe('PageHeader', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<PageHeader />);
	});

	it('contains a header text', () => {
		expect(wrapper.find('h1').length).toEqual(1);
	})

	it('contains a header with text Portfolio Manager', () => {
		expect(wrapper.find('h1').text()).toEqual('Portfolio Manager');
	})
});