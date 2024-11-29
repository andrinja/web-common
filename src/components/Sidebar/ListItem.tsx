import {ListItemProps, default as MuiListItem} from '@mui/material/ListItem';
import React, {ReactNode} from 'react';
import {styled} from '@mui/material/styles';

const StyledListItem = styled(MuiListItem)({
	WebkitTapHighlightColor: 'transparent',
	backgroundColor: 'transparent',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	paddingBlock: 0,
	paddingInline: 0,
	':focus,:visited,:active': {
		outline: 'none',
	},
	':hover': {
		background: 'transparent',
	},
});

export type Props = {
	children?: ReactNode
	isActive?: boolean
} & ListItemProps;

export default function ListItem({children, isActive = false, ...rest}: Props) {
	return (
		<StyledListItem
			disablePadding
			{...isActive ? {} : {
				sx: theme => ({
					':hover': {
						'.MuiBox-root > *': {
							color: theme.palette.text.secondary,
						},
					},
				}),
			}}
			{...rest}
		>
			{children}
		</StyledListItem>
	);
}
