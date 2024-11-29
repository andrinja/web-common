import 'swiper/css';
import React, {ReactNode, useEffect, useState} from 'react';
import {Swiper, SwiperClass, SwiperProps} from 'swiper/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Icon from 'components/Icon';
import IconButton from '@mui/material/IconButton';
import {useTheme} from '@mui/material/styles';

type ButtonProps = {
	disabled: boolean
	swiper?: SwiperClass
	title?: string
};

function NextButton({disabled, swiper, title}: ButtonProps) {
	if (!swiper) {
		return null;
	}

	return (
		<IconButton
			color="primary"
			disabled={disabled}
			onClick={() => !disabled && swiper.slideNext()}
			title={title}
		>
			<Icon name="ChevronRight"/>
		</IconButton>
	);
}

function PrevButton({disabled, swiper, title}: ButtonProps) {
	if (!swiper) {
		return null;
	}

	return (
		<IconButton
			color="primary"
			disabled={disabled}
			onClick={() => !disabled && swiper.slidePrev()}
			title={title}
		>
			<Icon name="ChevronLeft"/>
		</IconButton>
	);
}

export type Props = {
	backTitle?: string
	beforeChange?: (currentIndex: number, nextIndex: number, pageSize: number) => void
	children?: ReactNode
	nextTitle?: string
} & SwiperProps;

export default function Carousel({
	backTitle,
	beforeChange,
	children,
	nextTitle,
	...rest
}: Props) {
	const theme = useTheme();
	const [swiper, setSwiper] = useState<SwiperClass>();
	const [status, setStatus] = useState<undefined | 'beginning' | 'end'>();
	const [locked, setLocked] = useState(false);

	const swiperSettings = {
		breakpoints: {
			[theme.breakpoints.values.lg]: {
				slidesPerGroup: 4,
				slidesPerView: 4,
			},
			[theme.breakpoints.values.xl]: {
				slidesPerGroup: theme.options.carousel.maxSlidesPerView,
				slidesPerView: theme.options.carousel.maxSlidesPerView,
			},
		},
		onBeforeInit: (swiper: SwiperClass) => {
			setSwiper(swiper);
		},
		onBeforeSlideChangeStart: (swiper: SwiperClass) => {
			return beforeChange && beforeChange(swiper.activeIndex, swiper.previousIndex, 6);
		},
		onFromEdge: (swiper: SwiperClass) => {
			if (swiper.isBeginning) {
				setStatus('beginning');
			} else if (swiper.isEnd) {
				setStatus('end');
			} else {
				setStatus(undefined);
			}
		},
		onToEdge: (swiper: SwiperClass) => {
			if (swiper.isBeginning) {
				setStatus('beginning');
			} else if (swiper.isEnd) {
				setStatus('end');
			}
		},
		onLock: () => setLocked(true),
		onUnlock: () => setLocked(false),
		slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: theme.spacing(2),
		...rest,
	};

	useEffect(() => {
		if (!swiper) {
			return;
		}

		setStatus(swiper.isBeginning ? 'beginning' : swiper.isEnd ? 'end' : undefined);
		setLocked(swiper.isLocked);
	}, [swiper]);

	return (
		<Box position="relative">
			<Swiper {...swiperSettings}>
				{children}
			</Swiper>
			<Box
				mb={2}
				position="absolute"
				right={0}
				top={-32}
				sx={theme => ({
					top: -32 - parseInt(theme.spacing(2)),
				})}
				zIndex={1}
			>
				<Grid container spacing={1}>
					<Grid item>
						<PrevButton disabled={locked || status === 'beginning'} swiper={swiper} title={backTitle}/>
					</Grid>
					<Grid item>
						<NextButton disabled={locked || status === 'end'} swiper={swiper} title={nextTitle}/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
