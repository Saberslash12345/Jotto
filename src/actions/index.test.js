import { correctGuess, actionTypes } from './index';

describe('CorrectGuess', () => {
	it('should return action with type CORRECT GUESS', () => {
		const action = correctGuess();
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS});
	});
});