import Drawer, {DrawerProps} from '@mui/material/Drawer';
import {styled, useTheme} from '@mui/material/styles';
import List from './List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const StyledListItem = styled(ListItem)({
	':hover': {
		backgroundColor: 'inherit',
	},
});

export default function SidebarSkeleton(props: DrawerProps) {
	const {direction} = useTheme();

	return (
		<>
			<Drawer anchor={direction === 'rtl' ? 'right' : 'left'} {...props}>
				<List>
					{[...Array(2).keys()].map(item => (
						<StyledListItem key={item}>
							<Skeleton height={24} sx={{marginInlineEnd: 1}} variant="rectangular" width={24}/>
							<ListItemText disableTypography>
								<Typography>
									<Skeleton/>
								</Typography>
							</ListItemText>
						</StyledListItem>
					))}
				</List>
			</Drawer>
		</>
	);
}
