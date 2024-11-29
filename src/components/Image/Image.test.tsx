import {fireEvent, render} from 'utils/test-utils';
import Image from './';
import React from 'react';

const imageData = `data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==`;

test('Basic rendering', () => {
	const {getByRole} = render(<Image src={imageData}/>);

	fireEvent.load(getByRole('img'));
	expect(getByRole('img')).toBeInTheDocument();
});

test('Has children', () => {
	const {container, getByRole, getByText} = render(
		<Image src={imageData}>
			<p>value</p>
		</Image>
	);

	fireEvent.load(getByRole('img'));
	expect(container.firstChild).toContainElement(getByText('value'));
});

test('Renders with attributes', () => {
	const {container, getByRole} = render(
		<Image borderRadius="50%" src={imageData}/>
	);

	fireEvent.load(getByRole('img'));
	expect(container).not.toBeEmptyDOMElement();
});

test('onError', async() => {
	const {getByAltText, getByTestId} = render(<Image alt="test" src=""/>);

	fireEvent.error(getByAltText('test'));
	expect(getByTestId('BrokenImageIcon')).toBeInTheDocument();
});
