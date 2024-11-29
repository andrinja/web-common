import {default as ERROR} from './ERROR';

export default class StatusCodeErrorId {
	static ERROR_ID = {
		401: ERROR.SIGN_IN,
		403: ERROR.SIGN_IN,
		404: ERROR.NOT_FOUND,
		500: ERROR.GENERIC,
		503: ERROR.INTERNET,
		504: ERROR.TIMEOUT,
	};

	static _isOnline = (): boolean => window.navigator.onLine;

	static get = (statusCode?: number): string => {
		const code = statusCode as keyof typeof StatusCodeErrorId.ERROR_ID;

		return !this._isOnline()
			? StatusCodeErrorId.ERROR_ID[503]
			: statusCode && StatusCodeErrorId.ERROR_ID[code]
				? StatusCodeErrorId.ERROR_ID[code]
				: StatusCodeErrorId.ERROR_ID[500];
	};
}
