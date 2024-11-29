import CardControl from './';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const handleClick = jest.fn();
	const {getAllByRole} = render(<CardControl onClick={handleClick}/>);

	getAllByRole('button')[0].click();
	expect(handleClick).toHaveBeenCalledTimes(1);
});

test('borderRadius', () => {
	const handleClick = jest.fn();
	const {container} = render(<CardControl borderRadius="50%" onClick={handleClick}/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('Without props', () => {
	const {container} = render(<CardControl/>);

	expect(container).toBeEmptyDOMElement();
});
