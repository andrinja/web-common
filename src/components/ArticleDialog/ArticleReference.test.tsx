import ArticleReference from './ArticleReference';
import React from 'react';
import {render} from 'utils/test-utils';

test('no props', () => {
	const {container} = render(<ArticleReference/>);

	expect(container).toBeEmptyDOMElement();
});

test('reference provided', () => {
	const {getByText} = render(
		<ArticleReference reference={{imageUrl: '/some-url', subtitle: 'subtitle', title: 'title'}}/>
	);

	expect(getByText('subtitle')).toBeInTheDocument();
	expect(getByText('title')).toBeInTheDocument();
});

test('reference with link provided', () => {
	const {queryAllByAltText, queryAllByRole} = render(
		<ArticleReference
			linkTo="#"
			reference={{imageUrl: '/some-url', subtitle: 'subtitle', title: 'title'}}
		/>
	);

	expect(queryAllByRole('link').length).toBe(2);
	expect(queryAllByRole('link')[1].textContent).toBe('title');
	expect(queryAllByAltText('title').length).toBe(1);
});

test('Missing image URL', () => {
	const {queryAllByAltText, queryAllByRole} = render(
		<ArticleReference
			linkTo="#"
			reference={{imageUrl: '', subtitle: 'subtitle', title: 'title'}}
		/>
	);

	expect(queryAllByRole('link').length).toBe(2);
	expect(queryAllByAltText('title').length).toBe(0);
});
