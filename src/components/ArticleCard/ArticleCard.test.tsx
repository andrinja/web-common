import userEvent, {UserEvent} from '@testing-library/user-event';
import ArticleCard from './ArticleCard';
import React from 'react';
import {render} from 'utils/test-utils';

const defaults = {
	imgSrc: 'articleCover.jpg',
	subtitle: 'Curated by Jada',
	title: 'In a soulful mood…',
};

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Minimal props', () => {
	const {getByText} = render(<ArticleCard {...defaults}/>);
	expect(getByText(defaults.subtitle)).toBeInTheDocument();
	expect(getByText(defaults.title)).toBeInTheDocument();
});

test('onClick handler', async() => {
	const handleClick = jest.fn();
	const {getByRole} = render(<ArticleCard {...defaults} onClick={handleClick}/>);

	await user.click(getByRole('button'));
	expect(handleClick).toHaveBeenCalledTimes(1);
});
