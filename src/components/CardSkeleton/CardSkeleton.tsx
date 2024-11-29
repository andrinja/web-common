import Skeleton, {SkeletonProps} from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import React from 'react';

export type Props = SkeletonProps;

export default function CardSkeleton({...rest}: Props) {

	return (
		<>
			<Skeleton
				sx={{
					aspectRatio: '1/1',
					height: 'auto',
					mb: 1,
					width: 1,
					...rest.variant && rest.variant === 'circular' ? {borderRadius: '50%'} : {},
				}}
				{...rest}
			/>
			<Box mx={0.5}>
				<Skeleton sx={{display: 'inline-block', width: 0.5}} variant="text"/>
				{
					rest.variant !== 'circular' && (
						<Skeleton sx={{display: 'inline-block', width: 0.8}} variant="text"/>
					)
				}
			</Box>
		</>
	);
}
