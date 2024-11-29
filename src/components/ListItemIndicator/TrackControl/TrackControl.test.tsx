import React from 'react';
import TrackControl from './TrackControl';
import {render} from 'utils/test-utils';

test('Renders without error', () => {
	const handleClick = jest.fn();
	const {container} = render(<TrackControl onClick={handleClick}/>);

	expect(container).not.toBeEmptyDOMElement();
});
