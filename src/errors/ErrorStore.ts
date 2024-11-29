import CommonError from './CommonError';
import ERROR from './ERROR';

export default class ErrorStore {

	static errors: {[key: string]: CommonError} = {};

	static add = (id: string, error: CommonError) => {
		ErrorStore.errors[id] = error;
	};

	static getById = (id: string): CommonError => {
		return ErrorStore.errors[id] || ErrorStore.errors[ERROR.GENERIC];
	};

	static throw = (id: string, error?: Error) => {
		error && console.error(error);
		throw ErrorStore.getById(id);
	};
}
