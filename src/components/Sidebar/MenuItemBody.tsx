import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';

export type Props = {
	children?: ReactNode
	endIcon?: ReactNode
	icon?: ReactNode
};

export default function MenuItemBody({children, endIcon, icon}: Props) {
	return (
		<Box
			alignItems="center"
			display="flex"
			height="100%"
			sx={{paddingBlock: 1, paddingInline: 1}}
			width="100%"
		>
			{icon && (
				<Box sx={theme => ({display: 'flex', paddingInlineEnd: theme.spacing(1)})}>
					{icon}
				</Box>
			)}
			{children && (
				<ListItemText primaryTypographyProps={{component: 'span', variant: 'subtitle2'}}>
					{children}
				</ListItemText>
			)}
			{endIcon}
		</Box>
	);
}
