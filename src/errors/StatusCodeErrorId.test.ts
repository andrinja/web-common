import ERROR from './ERROR';
import StatusCodeErrorId from './StatusCodeErrorId';

test('Test with native online check', () => {
	expect(StatusCodeErrorId.get(401)).toBeTruthy();
});

test('Return error ids', () => {
	StatusCodeErrorId._isOnline = jest.fn(() => true);

	expect(StatusCodeErrorId.get(401)).toBe(ERROR.SIGN_IN);
	expect(StatusCodeErrorId.get(500)).toBe(ERROR.GENERIC);
});

test('Return generic error', () => {
	expect(StatusCodeErrorId.get()).toBe(ERROR.GENERIC);
});

test('Return offline error', () => {
	StatusCodeErrorId._isOnline = jest.fn(() => false);

	expect(StatusCodeErrorId.get(401)).toBe(ERROR.INTERNET);
	expect(StatusCodeErrorId.get(500)).toBe(ERROR.INTERNET);
});
