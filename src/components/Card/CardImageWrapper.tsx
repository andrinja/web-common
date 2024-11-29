import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';

export type Props = {
	children: ReactNode
	isBusy: boolean
	isCurrentContext: boolean
	isPlaying: boolean
};

export default function CardImageWrapper({children, isBusy, isCurrentContext, isPlaying}: Props) {
	return (
		<Box
			position="relative"
			sx={theme => ({
				// Card control
				...theme.mixins.genericPlayButton({
					isPaused: isCurrentContext && !isPlaying && !isBusy,
					isReadyToPlay: (!isCurrentContext || !isPlaying) && !isBusy,
					isBusy,
					isPlaying: isCurrentContext && isPlaying && !isBusy,
				}),
				// Selectors needed for overwriting .Mui-Disabled color
				'.MagentGenericPlayButton .MuiIconButton-root, .MuiIconButton-root': {
					bgcolor: 'common.black50',
					color: 'common.white',
					'&:hover': {
						bgcolor: 'common.black60',
					},
					'&.Mui-disabled': {
						bgcolor: 'common.black50',
						color: 'common.white',
						opacity: 1,
					},
				},
				'.MagentGenericPlayButton .MuiIconButton-root:hover': {
					bgcolor: 'primary.main',
				},
				// Card actions
				'> div:nth-of-type(2)': {
					display: 'none',
				},
				':hover > div:nth-of-type(2)': {
					display: 'flex',
				},
			})}
		>
			{children}
		</Box>
	);
}
