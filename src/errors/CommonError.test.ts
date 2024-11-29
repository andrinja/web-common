import CommonError from './CommonError';

test('CommonError should throw error if action is provided and not labelAction', () => {
	console.error = jest.fn();

	expect(() => new CommonError(
		'Oops…',
		'Is not you is us :)',
		undefined,
		() => {
			return;
		}
	)).toThrow(Error);
});

test('Throwing CommonError instance', () => {
	console.error = jest.fn();

	expect(() => {
		throw new CommonError(
			'Oops…',
			'Is not you is us :)',
			'ErrorGeneral',
			() => {
				return;
			},
			'action label'
		);
	}).toThrow(CommonError);
});
