import userEvent, {UserEvent} from '@testing-library/user-event';
import ArticleDialog from './ArticleDialog';
import React from 'react';
import {render} from 'utils/test-utils';

const defaultArticleProps = {
	content: 'content',
	createdDate: 'created date',
	imageUrl: 'image-url',
	subtitle: 'subtitle',
	title: 'title',
};

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Minimal props', () => {
	const {getByText} = render(<ArticleDialog articleProps={defaultArticleProps} open={true}/>);

	expect(getByText(defaultArticleProps.title)).toBeInTheDocument();
});

test('Render ArticleReference', () => {
	const {getByText} = render(
		<ArticleDialog
			articleProps={defaultArticleProps}
			articleReferenceProps={{reference: {imageUrl: 'image-url', title: 'reference title'}}}
			open={true}
		/>
	);

	expect(getByText('reference title')).toBeInTheDocument();
});

test('Clicking "close" button', async() => {
	const handleClose = jest.fn();
	const {getByLabelText} = render(
		<ArticleDialog articleProps={defaultArticleProps} onClose={handleClose} open={true}/>
	);

	await user.click(getByLabelText('Close'));

	expect(handleClose).toHaveBeenCalledTimes(1);
});
