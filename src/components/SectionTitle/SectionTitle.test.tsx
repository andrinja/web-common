import React from 'react';
import SectionTitle from './';
import {render} from 'utils/test-utils';

const title = 'Title';
const subtitle = 'Subtitle';

test('Basic rendering', () => {
	const {getByText} = render(<SectionTitle title={title}/>);

	expect(getByText(title)).toBeInTheDocument();
});

test('With subtitle', () => {
	const {getByText} = render(<SectionTitle subtitle={subtitle} title={title}/>);

	expect(getByText(subtitle)).toBeInTheDocument();
});
