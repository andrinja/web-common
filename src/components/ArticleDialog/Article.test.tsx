import Article from './Article';
import React from 'react';
import {render} from 'utils/test-utils';

const defaultProps = {
	content: 'content',
	createdDate: 'created date',
	imageUrl: 'image-url',
	subtitle: 'subtitle',
	title: 'title',
};

test('default props', () => {
	const {getByText, queryByText} = render(<Article {...defaultProps}/>);

	expect(getByText(defaultProps.content)).toBeInTheDocument();
	expect(getByText(defaultProps.createdDate)).toBeInTheDocument();
	expect(getByText(defaultProps.subtitle)).toBeInTheDocument();
	expect(getByText(defaultProps.title)).toBeInTheDocument();
	expect(queryByText('Translation mock set up in setupTests.ts')).toBeNull();
});

test('isExclusive', () => {
	const {getByText} = render(<Article {...defaultProps} isExclusive/>);

	expect(getByText('Translation mock set up in setupTests.ts')).toBeInTheDocument();
});

test('children', () => {
	const {getByText} = render(<Article {...defaultProps}>child</Article>);

	expect(getByText('child')).toBeInTheDocument();
});

test('Renders and clicks the link button', async() => {
	const {getByText} = render(
		<Article {...defaultProps} link={{text: 'link text', url: 'link url'}}/>
	);

	expect(getByText('link text')).toBeInTheDocument();
	expect(getByText('link text')).toHaveAttribute('href', 'link url');
});
