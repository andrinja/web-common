import CommonError from './CommonError';
import ERROR from './ERROR';
import ErrorStore from './ErrorStore';

const errors = {
	[ERROR.GENERIC]: new CommonError('title', 'description'),
	[ERROR.TIMEOUT]: new CommonError('something went wrong', 'description'),
};

Object.entries(errors).forEach(([id, error]) => {
	ErrorStore.add(id, error);
});

test('getById', () => {
	expect(ErrorStore.getById(ERROR.GENERIC).title).toEqual('title');
	expect(ErrorStore.getById(ERROR.TIMEOUT).title).toEqual('something went wrong');
	expect(ErrorStore.getById('test').title).toEqual('title');
});

test('throw', () => {
	console.error = jest.fn();

	expect(() => {
		ErrorStore.throw(ERROR.GENERIC);
	}).toThrowError(CommonError);

	expect(() => {
		ErrorStore.throw(ERROR.TIMEOUT);
	}).toThrowError(new CommonError('something went wrong', 'description'));

	expect(() => {
		ErrorStore.throw(ERROR.GENERIC, new Error());
	}).toThrowError(CommonError);
});
