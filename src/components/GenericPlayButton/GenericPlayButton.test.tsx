import GenericPlayButton from './GenericPlayButton';
import React from 'react';
import {render} from 'utils/test-utils';

test('Renders without error', () => {
	const {container, queryAllByRole} = render(<GenericPlayButton/>);
	expect(container).not.toBeEmptyDOMElement();
	expect(queryAllByRole('button').length).toBe(4);
});
