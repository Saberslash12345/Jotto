import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers/';
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
 	return createStoreWithMiddleware(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.PropTypes,
		conformingProps,
		'prop',
		component.name
	);
	expect(propError).toBeUndefined();
};

