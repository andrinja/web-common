import Validator from './Validator';

test('Check if the password fits the regular expression', () => {
	expect(Validator.isValidPassword('12345678*Aa')).toBe(true);
	expect(Validator.isValidPassword('12345678a')).toBe(true);
	expect(Validator.isValidPassword('12345678*')).toBe(false);
	expect(Validator.isValidPassword('12345678*A')).toBe(false);
});
