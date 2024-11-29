export default class MissingContextProviderError extends Error {
	constructor(contextHookName: string, providerName: string) {
		super(`${contextHookName} must be used within a ${providerName}`);
		this.name = 'MissingContextProviderError';
	}
}
