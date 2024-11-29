import PlayButton from './PlayButton';
import {Icon} from 'components/Icon';
import React from 'react';
import {render} from 'utils/test-utils';

describe('PlayButton tests', () => {

	test('Minimal properties', () => {
		const {container} = render(<PlayButton/>);
		expect(container).not.toBeEmptyDOMElement();
	});

	test('With pause icon', () => {
		const {container: iconContainer} = render(<Icon name="Pause"/>);
		const iconHtml = iconContainer.innerHTML;
		const {container} = render(<PlayButton isPlaying/>);
		expect(container).toContainHTML(iconHtml);
	});
});
