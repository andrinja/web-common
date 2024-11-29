import Box, {BoxProps} from '@mui/material/Box';
import Image, {ImageProps} from '../Image';
import React, {MouseEvent, MouseEventHandler, ReactElement, ReactNode, useCallback} from 'react';
import CardControl from './CardControl';
import CardImageWrapper from './CardImageWrapper';
import CardText from './CardText';
import CardTextLink from './CardTextLink';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';

export type Props = {
	actions?: ReactNode
	fallbackImage?: ReactNode
	imageProps: ImageProps
	isCurrentContext?: boolean
	isFetching?: boolean
	isPlaying?: boolean
	isTrackLoading?: boolean
	linkTo?: string
	onControlClick?: MouseEventHandler
	onLinkClick?: MouseEventHandler
	primary: string
	secondary?: string | ReactElement
	shape?: 'circle' | 'square'
	title?: string
} & BoxProps;

export default function Card({
	actions,
	fallbackImage,
	imageProps,
	isCurrentContext = false,
	isFetching = false,
	isPlaying = false,
	isTrackLoading = false,
	linkTo,
	onControlClick,
	onLinkClick,
	primary,
	secondary,
	shape = 'square',
	title,
	...rest
}: Props) {
	const borderRadius = shape === 'circle' ? '50%' : 1;
	const isBusy = isFetching || isTrackLoading && isCurrentContext;
	const handleClick = useCallback((event: MouseEvent) => {
		!isBusy && onLinkClick && onLinkClick(event);
	}, [isBusy, onLinkClick]);

	const cardImage = (
		<Image borderRadius={borderRadius} fallbackImage={fallbackImage} {...imageProps}>
			<CardControl borderRadius={borderRadius} onClick={onControlClick}/>
		</Image>
	);

	return (
		<Box {...rest}>
			<CardImageWrapper isBusy={isBusy} isCurrentContext={isCurrentContext} isPlaying={isPlaying}>
				<Box>
					{
						!linkTo
							? cardImage
							: (
								<Link component={RouterLink} onClick={handleClick} to={linkTo}>
									{cardImage}
								</Link>
							)
					}
				</Box>
				{actions}
			</CardImageWrapper>
			<CardText
				primary={
					!linkTo
						? primary
						: <CardTextLink linkTo={linkTo} onClick={handleClick} text={primary}/>
				}
				secondary={secondary}
				textAlign={shape === 'circle' ? 'center' : 'start'}
				title={title}
			/>
		</Box>
	);
}
