import React, {MouseEventHandler, ReactNode} from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from 'components/Tooltip';

type Props = {
	disabled?: boolean
	icon: ReactNode
	onClick?: MouseEventHandler
	tooltip?: string
};

export default function NavigationArrow({
	disabled = false,
	icon,
	onClick,
	tooltip,
}: Props) {
	const button = (
		<IconButton color="secondary" disabled={disabled} onClick={onClick}>
			{icon}
		</IconButton>
	);

	return disabled || !tooltip ? button : <Tooltip title={tooltip}>{button}</Tooltip>;
}
