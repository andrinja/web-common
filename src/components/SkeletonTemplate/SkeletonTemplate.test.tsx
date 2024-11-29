import React from 'react';
import SkeletonTemplate from './SkeletonTemplate';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(<SkeletonTemplate/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('With skeletonType "circle"', () => {
	const {container} = render(<SkeletonTemplate skeletonType="circle"/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('With skeletonType "square"', () => {
	const {container} = render(<SkeletonTemplate skeletonType="square"/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('With message', () => {
	const message = 'This is a message';
	const {getByText} = render(<SkeletonTemplate message={message}/>);

	expect(getByText(message)).toBeInTheDocument();
});

test('With all props', () => {
	const message = 'This is a message';
	const {getByText} = render(
		<SkeletonTemplate message={message} nodeCount={5} skeletonType="square"/>
	);

	expect(getByText(message)).toBeInTheDocument();
});
