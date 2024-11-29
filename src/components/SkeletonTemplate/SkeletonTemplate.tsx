import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import CardSkeletonGrid from './CardSkeletonGrid';
import Grid from '@mui/material/Grid';
import ListSkeleton from './ListSkeleton';

export type Props = {
	message?: ReactNode
	nodeCount?: number
	skeletonType?: 'circle' | 'list' | 'square'
};

export default function SkeletonTemplate({message, nodeCount, skeletonType = 'list'}: Props) {
	return (
		<Grid
			container
			maxHeight={1}
			overflow="hidden"
			position="relative"
			sx={theme => ({
				'&:after': {
					background: theme.palette.background.skeleton,
					content: '\'\'',
					height: '100%',
					position: 'absolute',
					width: '100%',
				},
			})}
			{...skeletonType === 'circle' ? {textAlign: 'center'} : {}}
		>
			{
				skeletonType === 'circle'
					? <CardSkeletonGrid nodeCount={nodeCount} variant="circular"/>
					: skeletonType === 'square'
						? <CardSkeletonGrid nodeCount={nodeCount}/>
						: <ListSkeleton nodeCount={nodeCount}/>
			}
			{message && (
				<Box
					alignItems="center"
					bottom="0"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					position="absolute"
					sx={{
						insetBlockStart: 0,
						insetInline: 0,
					}}
					textAlign="center"
					zIndex="1"
				>
					<Box sx={{paddingBlockStart: 2, whiteSpace: 'pre-wrap'}}>
						{message}
					</Box>
				</Box>
			)}
		</Grid>
	);
}
