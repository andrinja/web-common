import {NavigationArrows} from './';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getAllByRole} = render(<NavigationArrows/>);

	expect(getAllByRole('button').length).toBe(2);
});

test('disabled', () => {
	const {getAllByRole} = render(<NavigationArrows disableBack disableForward/>);

	expect(getAllByRole('button')[0]).toBeDisabled();
	expect(getAllByRole('button')[1]).toBeDisabled();
});

test('Tooltips', () => {
	const {getAllByRole} = render(
		<NavigationArrows tooltipBack="Go back" tooltipForward="Go Forward"/>
	);

	expect(getAllByRole('button').length).toBe(2);
});

test('Click handlers', () => {
	const handleClick = jest.fn();
	const {getAllByRole} = render(<NavigationArrows onClick={handleClick}/>);

	getAllByRole('button')[0].click();

	expect(handleClick).toHaveBeenCalledTimes(1);
	expect(handleClick).toHaveBeenCalledWith('back');

	getAllByRole('button')[1].click();

	expect(handleClick).toHaveBeenCalledTimes(2);
	expect(handleClick).toHaveBeenLastCalledWith('forward');
});
