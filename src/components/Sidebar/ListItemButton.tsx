import {ListItemButtonProps, default as MuiListItemButton} from '@mui/material/ListItemButton';
import React, {ReactNode} from 'react';
import {styled} from '@mui/material/styles';

const StyledListItemButton = styled(MuiListItemButton)(({theme}) => ({
	alignItems: 'center',
	display: 'flex',
	height: '48px',
	paddingInline: theme.spacing(1),
	width: '100%',
	':disabled': {
		cursor: 'default',
		opacity: 0.3,
	},
	':hover': {
		background: 'transparent',
	},
}));

export type Props = {
	children?: ReactNode
} & ListItemButtonProps;

export default function ListItemButton({children, ...rest}: Props) {
	return (
		<StyledListItemButton {...rest}>
			{children}
		</StyledListItemButton>
	);
}
