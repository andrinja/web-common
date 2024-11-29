import Grid from '@mui/material/Grid';
import Icon from 'components/Icon';
import NavigationArrow from './NavigationArrow';
import React from 'react';

export type Props = {
	disableBack?: boolean
	disableForward?: boolean
	onClick?: (direction: 'back' | 'forward') => void
	tooltipBack?: string
	tooltipForward?: string
};

export default function NavigationArrows({
	disableBack = false,
	disableForward = false,
	onClick,
	tooltipBack,
	tooltipForward,
}: Props) {
	return (
		<Grid
			alignItems="center"
			container
			item
			ml={-1}
			sx={theme => ({cursor: 'initial', ...theme.mixins.topBar})}
			xs="auto"
		>
			<NavigationArrow
				disabled={disableBack}
				icon={<Icon name="ChevronLeft"/>}
				onClick={() => onClick && onClick('back')}
				tooltip={tooltipBack}
			/>
			<NavigationArrow
				disabled={disableForward}
				icon={<Icon name="ChevronRight"/>}
				onClick={() => onClick && onClick('forward')}
				tooltip={tooltipForward}
			/>
		</Grid>
	);
}
