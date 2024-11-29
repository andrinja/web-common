import ChevronLink from './ChevronLink';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(<ChevronLink>See all</ChevronLink>);

	expect(getByText('See all')).toBeInTheDocument();
});

test('Variants', () => {
	expect.assertions(2);

	['right', 'left'].forEach(alignment => {
		const {getByText} = render(
			<ChevronLink alignment={alignment as 'left' | 'right'}>{alignment}</ChevronLink>
		);
		expect(getByText(alignment)).toBeInTheDocument();
	});
});
