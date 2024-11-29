import ListItemIndicator from './ListItemIndicator';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(
		<ListItemIndicator imgSrc="https://ma-graphics.s3.amazonaws.co/moodagent-backgrounds/1-2.jpg"/>
	);

	expect(container).not.toBeEmptyDOMElement();
});

test('With index', () => {
	const {container} = render(<ListItemIndicator index={1}/>);

	expect(container).not.toBeEmptyDOMElement();
});
