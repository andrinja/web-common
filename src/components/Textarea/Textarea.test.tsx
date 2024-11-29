import {fireEvent, render} from 'utils/test-utils';
import React from 'react';
import Textarea from './Textarea';

test('Basic rendering', () => {
	const {container} = render(<Textarea/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('On change', () => {
	const handleOnChange = jest.fn();
	const initialValue = 'Value for multiline';
	const {getByText} = render(<Textarea onChange={handleOnChange} value={initialValue}/>);

	expect(getByText(initialValue)).toBeInTheDocument();
	fireEvent.change(getByText(initialValue), {target: {value: 'abc'}});
	expect(handleOnChange).toHaveBeenCalledTimes(1);
});

test('Max characters', () => {
	const value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ';
	const {getByText} = render(
		<Textarea maxLength={250} value={value}/>
	);

	expect(getByText(`${value.length}/250`)).toBeInTheDocument();
});
