import {PASSWORD_REGEX} from '../CONSTANTS';

export default class Validator {
	static isValidPassword(password: string) {
		return PASSWORD_REGEX.test(password);
	}
}
