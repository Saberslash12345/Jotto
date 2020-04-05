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
		it('should render without error', () => {

		});
		it('should not render input box', () => {

		});
		it('should not render submit button', () => {

		});
	});

});
// describe('render', () => {

// });
