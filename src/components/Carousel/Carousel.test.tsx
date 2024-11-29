import Carousel, {CarouselItem} from './';
import userEvent, {UserEvent} from '@testing-library/user-event';
import Box from '@mui/material/Box';
import React from 'react';
import {render} from 'utils/test-utils';

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Basic rendering', () => {
	const {container} = render(<Carousel/>);

	expect(container).toBeInTheDocument();
});

test('With arrows', () => {
	const {getByTitle} = render(
		<Carousel backTitle="back" nextTitle="next">
			{Array.from(Array(13).keys()).map(item => <Box key={item}>1</Box>)}
		</Carousel>
	);

	expect(getByTitle('back')).toBeInTheDocument();
	expect(getByTitle('next')).toBeInTheDocument();
});

test('With Children', () => {
	const {getByText} = render(
		<Carousel backTitle="back" nextTitle="next">
			<CarouselItem>slide 1</CarouselItem>
		</Carousel>
	);

	expect(getByText('slide 1')).toBeInTheDocument();
});

test('Events', async() => {
	const handleBeforeChange = jest.fn();

	const {getAllByRole, getByTestId} = render(
		<Carousel beforeChange={handleBeforeChange}>
			<CarouselItem>slide 1</CarouselItem>
		</Carousel>
	);

	await user.click(getByTestId('swiper'));
	expect(getAllByRole('button')[0]).not.toBeDisabled();
	expect(getAllByRole('button')[1]).not.toBeDisabled();

	await user.click(getAllByRole('button')[0]);
	await user.click(getAllByRole('button')[1]);

	expect(handleBeforeChange).toHaveBeenCalledTimes(1);

	await user.click(getByTestId('swiper'));
	expect(getAllByRole('button')[0]).toBeDisabled();
	expect(getAllByRole('button')[1]).not.toBeDisabled();

	await user.click(getByTestId('swiper'));
	expect(getAllByRole('button')[0]).not.toBeDisabled();
	expect(getAllByRole('button')[1]).toBeDisabled();
});
