import MissingContextProviderError from './MissingContextProviderError';

test('Throw error', () => {
	const error = new MissingContextProviderError('contextHookName', 'providerName');

	expect(() => {
		throw error;
	})
		.toThrow(MissingContextProviderError);

	expect(error.name).toBe('MissingContextProviderError');
});
