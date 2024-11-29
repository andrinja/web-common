import React, {useEffect, useState} from 'react';
import {fireEvent, render} from 'utils/test-utils';
import CodeInput from './';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Minimal properties', () => {
	const {getAllByRole} = render(<CodeInput/>);
	const inputs = getAllByRole('spinbutton');

	expect(inputs).toHaveLength(6);
	fireEvent.change(inputs[0], {target: {value: '0'}});
	fireEvent.keyDown(inputs[1], {code: 'Backspace'});
});

test('Helper text', () => {
	const {getByText} = render(<CodeInput helperText="Helper text"/>);
	expect(getByText('Helper text')).toBeInTheDocument();
});

test('Keyboard navigation', () => {
	const handleOnChange = jest.fn();
	const {getAllByRole} = render(<CodeInput onChange={handleOnChange} value="012345"/>);
	const inputs = getAllByRole('spinbutton');

	fireEvent.keyDown(inputs[3], {key: 'ArrowLeft'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[0], {key: 'ArrowLeft'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[3], {key: 'ArrowRight'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[5], {key: 'ArrowRight'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[5], {key: 'ArrowLeft'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[5], {key: 'e'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[5], {key: 'E'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[5], {key: '.'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[3], {key: 'A'});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.keyDown(inputs[3], {key: 'Backspace'});
	expect(handleOnChange).toHaveBeenCalledTimes(1);
	expect(handleOnChange).toHaveBeenCalledWith('012 45');

	fireEvent.keyDown(inputs[0], {key: 'Backspace'});
	expect(handleOnChange).toHaveBeenCalledTimes(2);
	expect(handleOnChange).toHaveBeenCalledWith(' 12 45');

	fireEvent.keyDown(inputs[2], {key: 'Delete'});
	expect(handleOnChange).toHaveBeenCalledTimes(3);
	expect(handleOnChange).toHaveBeenCalledWith(' 1  45');
});

test('Native input onChange', () => {
	const handleOnChange = jest.fn();
	const {getAllByRole} = render(<CodeInput onChange={handleOnChange}/>);
	const inputs = getAllByRole('spinbutton');

	fireEvent.change(inputs[0], {target: {value: ''}});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.change(inputs[0], {target: {value: 'a'}});
	expect(handleOnChange).toHaveBeenCalledTimes(0);

	fireEvent.change(inputs[0], {target: {value: '0'}});
	expect(handleOnChange).toHaveBeenCalledTimes(1);
	expect(handleOnChange).toHaveBeenCalledWith('0     ');

	fireEvent.change(inputs[1], {target: {value: '12'}});
	expect(handleOnChange).toHaveBeenCalledTimes(2);
	expect(handleOnChange).toHaveBeenCalledWith('012   ');

	fireEvent.change(inputs[5], {target: {value: '5'}});
	expect(handleOnChange).toHaveBeenCalledTimes(3);
	expect(handleOnChange).toHaveBeenCalledWith('012  5');

	fireEvent.change(inputs[5], {target: {value: '67'}});
	expect(handleOnChange).toHaveBeenCalledTimes(4);
	expect(handleOnChange).toHaveBeenCalledWith('012  6');
});

test('Controlled component', () => {
	const handleChange = jest.fn();
	const CodeInputWrapper = function({onChange}: {onChange: (code: string) => void}) {
		const [code, setCode] = useState('');

		useEffect(() => {
			onChange(code);
		}, [code, onChange]);

		return <CodeInput onChange={code => setCode(code)} value={code}/>;
	};
	const {getAllByRole} = render(<CodeInputWrapper onChange={handleChange}/>);
	const inputs = getAllByRole('spinbutton');

	fireEvent.change(inputs[0], {target: {value: '0'}});
	expect(handleChange).toHaveBeenCalledWith('0     ');
});

test('Paste event', async() => {
	const handlePaste = jest.fn();
	const handleChange = jest.fn();
	const {getAllByRole} = render(<CodeInput onChange={handleChange} onPaste={handlePaste}/>);
	const inputs = getAllByRole('spinbutton');

	await user.paste('123456');
	expect(handlePaste).toHaveBeenCalled();
	fireEvent.change(inputs[0], {target: {value: '023456'}});
	expect(handleChange).toHaveBeenCalledWith('023456');
});

test('Click event', () => {
	const handleClick = jest.fn();
	const {getAllByRole} = render(<CodeInput onClick={handleClick}/>);
	const inputs = getAllByRole('spinbutton');

	fireEvent.click(inputs[0]);
	expect(handleClick).toHaveBeenCalledTimes(1);
	fireEvent.change(inputs[0], {target: {value: '0'}});
	fireEvent.click(inputs[0]);
	expect(handleClick).toHaveBeenCalledTimes(2);
});
