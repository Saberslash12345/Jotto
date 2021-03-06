import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initalState = {}) => {
	const store = storeFactory(initalState);
	const wrapper = shallow(<Input store={store} />).dive().dive();
	return wrapper;
}
describe('render', () => {
	describe('word has not been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initalState = { success: false }
			wrapper = setup(initalState);
		})
		it('should render without error', () => {
			const component = findByTestAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});
		it('should render input box', () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.length).toBe(1);
		});
		it('should render submit button', () => {
			const submitButton = findByTestAttr(wrapper, "submit-button");
			expect(submitButton.length).toBe(1);
		});
	});

	describe('word has been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initalState = { success: true }
			wrapper = setup(initalState);
		})
		it('should render without error', () => {
			const component = findByTestAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});
		it('should not render input box', () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.length).toBe(0);
		});
		it('should not render submit button', () => {
			const submitButton = findByTestAttr(wrapper, "submit-button");
			expect(submitButton.length).toBe(0);
		});
	});

});
// describe('render', () => {

// });
