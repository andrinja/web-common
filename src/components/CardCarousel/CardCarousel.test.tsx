import CardCarousel, {CardCarouselItem} from './';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(
		<CardCarousel>
			<CardCarouselItem>Item</CardCarouselItem>
		</CardCarousel>
	);

	expect(getByText('Item')).toBeInTheDocument();
});

test('Tall cards', () => {
	const {getByText} = render(
		<CardCarousel presentStyle="tallcard">
			<CardCarouselItem>Item</CardCarouselItem>
		</CardCarousel>
	);

	expect(getByText('Item')).toBeInTheDocument();
});
