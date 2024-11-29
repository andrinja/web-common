import {default as MuiTooltip, TooltipProps} from '@mui/material/Tooltip';
import React, {useState} from 'react';
import Typography from '@mui/material/Typography';

export type Props = {
	closeOnClick?: boolean
} & TooltipProps;

export default function Tooltip({
	children,
	closeOnClick = false,
	title,
	...rest
}: Props) {
	const [open, setOpen] = useState(false);

	return (
		<MuiTooltip
			disableHoverListener
			onClick={() => closeOnClick && setOpen(false)}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			open={open}
			placement="top"
			title={title && <Typography variant="caption">{title}</Typography>}
			{...rest}
		>
			<div>{children}</div>
		</MuiTooltip>
	);
}
