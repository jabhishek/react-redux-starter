import React from 'react';
import { shallow } from 'enzyme';
import AddPortfolio from './add-portfolio';

describe('Add Portfolio', () => {
	it('should have a subheader', () => {
		const wrapper = shallow(<AddPortfolio />);
		const subheader = wrapper.find('SubHeader');
		expect(subheader.length).toEqual(1);
		expect(subheader.props().headerText).toEqual('Add New Portfolio');
	})
	it('should have a form', () => {
		const wrapper = shallow(<AddPortfolio />);
		const form = wrapper.find('form');
		expect(form.length).toEqual(1);
	})
	it('should have a TextField inside form', () => {
		const wrapper = shallow(<AddPortfolio />);
		const form = wrapper.find('form');
		const TextField = form.find('TextField');
		expect(TextField.length).toEqual(1);

		const textFieldProps = TextField.props();
		expect(textFieldProps.hintText).toEqual('Enter Portfolio Name');
		expect(textFieldProps.value).toEqual('');

		wrapper.setState({ portfolio: 'PF' });
		expect(wrapper.find('TextField').props().value).toEqual('PF');
	})
	describe('TextField', () => {
		it('should have a TextField inside form', () => {
			const wrapper = shallow(<AddPortfolio />);

			expect(wrapper.find('TextField').props().hintText).toEqual('Enter Portfolio Name');
			expect(wrapper.find('TextField').props().value).toEqual('');

			wrapper.setState({ portfolio: 'PF' });
			expect(wrapper.find('TextField').props().value).toEqual('PF');
		})
	})
});