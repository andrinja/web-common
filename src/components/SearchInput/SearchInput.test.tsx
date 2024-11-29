import React from 'react';
import SearchInput from './SearchInput';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(<SearchInput/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('handle clear click', () => {
	const handleClearClick = jest.fn();
	const {getByRole} = render(<SearchInput onClearClick={handleClearClick} value="test"/>);

	getByRole('button').click();

	expect(handleClearClick).toHaveBeenCalledTimes(1);
});
