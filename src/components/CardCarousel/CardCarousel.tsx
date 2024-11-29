import Carousel, {CarouselProps} from '../Carousel';
import React, {ReactNode} from 'react';
import {useTheme} from '@mui/material';
import {useTranslation} from 'react-i18next';

export type Props = {
	children: ReactNode
	presentStyle?: 'articlecard' | 'tallcard'
} & CarouselProps;

export default function CardCarousel({children, presentStyle, ...rest}: Props) {
	const {t} = useTranslation();
	const {breakpoints} = useTheme();
	const isLargeCard = ['articlecard', 'tallcard'].includes(presentStyle || '');

	return (
		<Carousel
			backTitle={t('Back')}
			nextTitle={t('Next')}
			{...!isLargeCard ? {} : {
				slidesPerGroup: 2,
				slidesPerView: 2,
				breakpoints: {
					[breakpoints.values.lg]: {
						slidesPerGroup: 3,
						slidesPerView: 3,
					},
					[breakpoints.values.xl]: {
						slidesPerGroup: 4,
						slidesPerView: 4,
					},
				},
			}}
			{...rest}
		>
			{children}
		</Carousel>
	);
}
