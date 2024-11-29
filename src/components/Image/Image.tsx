import React, {ReactNode, useCallback, useState} from 'react';
import Box from '@mui/material/Box';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import {LazyLoadImage, LazyLoadImageProps} from 'react-lazy-load-image-component';
import {styled} from '@mui/material/styles';

const StyledIconContainer = styled(Box)(({theme}) => ({
	alignItems: 'center',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	pointerEvents: 'none',
	width: '100%',
	svg: {
		color: theme.palette.grey.medium,
		height: '50%',
		width: '50%',
	},
}));

export type Props = {
	aspectRatio?: number
	borderRadius?: number | string
	children?: ReactNode
	fallbackImage?: ReactNode
} & LazyLoadImageProps;

export default function Image({
	aspectRatio = 1,
	borderRadius = 1,
	children,
	fallbackImage,
	...rest
}: Props) {
	const [imageError, setImageError] = useState(false);

	const handleImageError = useCallback(() => {
		setImageError(true);
	}, []);

	return (
		<Box
			bgcolor="grey.main"
			borderRadius={borderRadius}
			overflow="hidden"
			sx={{
				aspectRatio,
			}}
		>
			{
				!imageError
					? (
						<LazyLoadImage
							height="100%"
							onError={handleImageError}
							width="100%"
							wrapperProps={{
								style: {
									display: 'block',
									height: '100%',
									width: '100%',
								},
							}}
							{...rest}
						/>
					)
					: fallbackImage ?? <StyledIconContainer><BrokenImageIcon/></StyledIconContainer>
			}
			{children}
		</Box>
	);
}
